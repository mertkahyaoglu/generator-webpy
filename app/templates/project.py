# -*- coding: utf-8 -*-
import web

urls = (
    '/', 'index',
)

myglobals = {

}

render = web.template.render('templates/', base='base', globals=myglobals)

class index:
    def GET(self):
        return render.index()

if __name__ == "__main__":
    app = web.application(urls, globals())
    web.httpserver.runsimple(app.wsgifunc(), ("<%= url %>", <%= portNumber %>))
