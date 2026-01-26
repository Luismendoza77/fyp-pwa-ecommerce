# -*- encoding: utf-8 -*-
"""
Adapted from:
Copyright (c) 2019 - present AppSeed.us

Final Year Project - Luis Alexander Yunga Mendoza
"""


from app import app

DEBUG  = app.config.get('DEBUG', True)
STRIPE = app.config.get('STRIPE_IS_ACTIVE', False) 


if DEBUG:
    app.logger.info('DEBUG            = ' + str(DEBUG) )
    app.logger.info('Page Compression = ' + 'FALSE')
    app.logger.info('STRIPE           = ' + str( STRIPE ) )

if __name__ == "__main__":
    app.run(debug = DEBUG)

