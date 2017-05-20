from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
import os

indexFile = open(os.path.join(os.path.dirname(__file__), '404.html'), 'r').read()

class NotFoundPageHandler(webapp.RequestHandler):
    def get(self):
        self.error(404)
        # self.response.out.write(template.render(path, {}))
        self.response.out.write(indexFile)

application = webapp.WSGIApplication([('/.*', NotFoundPageHandler)], debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
