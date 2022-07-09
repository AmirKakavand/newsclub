from flask import Flask  # pip3 install Flask
from flask_restful import Api, Resource, reqparse  # pip3 install Flask-RESTful
from db_manage import DB



class AllAccount(Resource):
    def __init__(self):
        ##### DB #####
        self.access_db: DB = DB()
        ##### parser #####
        self.get_account_parser = reqparse.RequestParser()


    def get(self):
        account = self.access_db.find_all_account()
        print(account)
        if account:
            return account
        else:
            return 404




class Account(Resource):
    def __init__(self):
        ##### DB #####
        self.access_db: DB = DB()
        ##### parser #####
        self.post_account_parser = reqparse.RequestParser()
        self.post_account_parser.add_argument('firstname', type=str, help='f_name is required', required=True)
        self.post_account_parser.add_argument('lastname', type=str, help='l_name is required', required=True)
        self.post_account_parser.add_argument('phone', type=str, help='phone is required', required=True)
        self.post_account_parser.add_argument('password', type=str, help='passwd is required', required=True)
        self.post_account_parser.add_argument('category', type=str, help='category is required')
        self.post_account_parser.add_argument('status', type=str, help='status is required')
        self.post_account_parser.add_argument('email', type=str, help='email is required')

        self.get_account_parser = reqparse.RequestParser()
        # self.get_account_parser.add_argument('_id', type=str, help='username is required', required=True,location='args')
        self.get_account_parser.add_argument('phone', type=str, help='phone is required', required=True,location='args')
        self.get_account_parser.add_argument('password', type=str, help='password is required', required=True,location='args')

        self.put_account_parser = reqparse.RequestParser()
        self.put_account_parser.add_argument('firstname', type=str, help='f_name is required')
        self.put_account_parser.add_argument('lastname', type=str, help='l_name is required')
        self.put_account_parser.add_argument('id', type=str, help='id is required', required=True)
        self.put_account_parser.add_argument('phone', type=str, help='phone is required')
        self.put_account_parser.add_argument('status', type=str, help='status is required')
        self.put_account_parser.add_argument('email', type=str, help='email is required')
        self.put_account_parser.add_argument('category', type=str, help='category is required')


    def get(self):
        args: dict = self.get_account_parser.parse_args()
        account = self.access_db.find_account(args)
        print(account)
        if account:
            return account
        else:
            return 404

    #
    def post(self):
        args: dict = self.post_account_parser.parse_args()
        if self.access_db.insert_account(args): return 200
        else: return 500

    def put(self):
        args: dict = self.put_account_parser.parse_args()
        doc: dict = {
            '_id': args['id'],
        }
        if self.access_db.update_account(doc, args):
            return 200
        else:
            return 304

    def delete(self):
        args: dict = self.get_account_parser.parse_args()
        if self.access_db.delete_account(args): return 200
        else: return 404

class News(Resource):
    def __init__(self):
        ##### DB #####
        self.access_db: DB = DB()
        ##### parser #####
        self.post_news_parser = reqparse.RequestParser()
        self.post_news_parser.add_argument('title', type=str, help='f_name is required', required=True)
        self.post_news_parser.add_argument('content', type=str, help='l_name is required', required=True)
        self.post_news_parser.add_argument('date', type=str, help='phone is required', required=True)
        self.post_news_parser.add_argument('category', type=str, help='passwd is required', required=True)

        self.get_news_parser = reqparse.RequestParser()
        self.get_news_parser.add_argument('id', type=str, help='id is required', required=True, location='args')

        self.put_news_parser = reqparse.RequestParser()
        self.put_news_parser.add_argument('id', type=str, help='id is required', required=True)
        self.put_news_parser.add_argument('title', type=str, help='f_name is required')
        self.put_news_parser.add_argument('content', type=str, help='l_name is required')
        self.put_news_parser.add_argument('date', type=str, help='phone is required')
        self.put_news_parser.add_argument('category', type=str, help='passwd is required')

    def get(self):
        args: dict = self.get_news_parser.parse_args()
        args["_id"] = args['id']
        news = self.access_db.find_news(args)
        if news:
            return news
        else:
            return 404


    def post(self):
        args: dict = self.post_news_parser.parse_args()
        if self.access_db.insert_news(args): return 200
        else: return 500

    def put(self):
        args: dict = self.put_news_parser.parse_args()
        doc: dict = {
            '_id': args['id'],
        }
        if self.access_db.update_news(doc, args): return 200
        else: return 304

    def delete(self):
        args: dict = self.get_news_parser.parse_args()
        if self.access_db.delete_news(args): return 200
        else: return 404


class LastNews(Resource):
    def __init__(self):
        ##### DB #####
        self.access_db: DB = DB()
        ##### parser #####
        self.get_account_parser = reqparse.RequestParser()


    def get(self,news_topic):
        news = self.access_db.find_all_news(news_topic)
        if news:
            return news
        else:
            return 404





def main() -> None:
    app = Flask(__name__)
    api = Api(app)
    # 1. / news - club / account
    # 2. / news - club / update - account - ticket
    # 3. / news - club / delete - account - ticket
    # 4. / news - club / post - news - ticket
    # 5. / news - club / last - news / < string: news_topic >
    #
    # api.add_resource(News, '/main/<string:name>/world/<int:key>')
    api.add_resource(News, '/news')
    api.add_resource(Account, '/news-club/account')
    api.add_resource(AllAccount, '/admin/account')
    api.add_resource(LastNews, '/news-club/last-news/<string:news_topic>')
    app.run()


if __name__ == '__main__':
    main()
