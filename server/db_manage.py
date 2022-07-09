from pymongo import MongoClient
from pymongo import errors as mongo
from bson.objectid import ObjectId

class DB:
    def __init__(self):
        try:
            self._connection = MongoClient('127.0.0.1', 27017)
        except mongo.ServerSelectionTimeoutError as E: print(E)
        except mongo.ConnectionFailure as E: print(E)
        else:
            self._db = self._connection['flask_test']
            self._account_coll = self._db['account']
            self._news_coll = self._db['news']


    def find_all_account(self, query: str = '$eq') -> list:
        # document["_id"] = ObjectId(document["_id"])
        accounts = self._account_coll.find({})
        accounts = list(accounts)
        for account in accounts:
            account['_id'] = str(account['_id'])
            print(account)
            print(type(account))
            # return account
        return accounts

    def insert_account(self, document: dict) -> bool:
        if not self.find_account(document):
            if self._account_coll.insert_one(document).acknowledged:
                return True
            else:
                return False
        else:
            return False

    def find_account(self, document: dict, query: str = '$eq') -> dict:
        document["_id"] = ObjectId(document["_id"])
        account = self._account_coll.find_one(document)
        if account is not None:
            account['_id'] = str(account['_id'])
            return account
        else:
            return {}

    def update_account(self, old_doc: dict, new_doc: dict, query: str = '$set') -> bool:
        if self._account_coll.update_one(old_doc, {query: new_doc}).acknowledged:
            return True
        else:
            return False

    def delete_account(self, document: dict) -> bool:
        if self._account_coll.delete_one(document).acknowledged:
            return True
        else:
            False



    def insert_news(self, document: dict) -> bool:
        if not self.find_news(document):
            if self._news_coll.insert_one(document).acknowledged:
                return True
            else:
                return False
        else:
            return False

    def find_news(self, document: dict, query: str = '$eq') -> dict:
        document["_id"] = ObjectId(document["_id"])
        news = self._news_coll.find_one(document)
        if news is not None:
            news['_id'] = str(news['_id'])
            return news
        else:
            return {}

    def update_news(self, old_doc: dict, new_doc: dict, query: str = '$set') -> bool:
        if self._news_coll.update_one(old_doc, {query: new_doc}).acknowledged:
            return True
        else:
            return False

    def delete_news(self, document: dict) -> bool:
        if self._news_coll.delete_one(document).acknowledged:
            return True
        else:
            False

    def find_all_news(self,category="", query: str = '$eq') -> list:
        # document["_id"] = ObjectId(document["_id"])
        news = self._news_coll.find({"category":category})
        news = list(news)
        for n in news:
            n['_id'] = str(n['_id'])
            # print()
            # print(type(account))
            # return account
        return news
