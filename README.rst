*****************
Django Admin Flex
*****************

An admin theme for Django >= 1.6 setup for Bootstrap 3.

About
=====

A set of Django Admin html templates curated for Bootstrap 3. Included is vanilla Bootstrap as well as a custom theme that is active by default to alleviate your fugly django-admin plight. Use your own Bootstrap theme to match the style of your front-end site (see customization instructions below).

Features
========

* Rock solid admin templates that can be used with any Bootstrap theme
* Two no-clutter themes included: "Bootstrap's Vanilla" and Bento-box (which can be activated by overriding the vanilla theme in ``admin/base_site.html``)
* Full/fluid width listing page for content heavy admins
* Always-visible change form actions
* No fuss: these templates will fit in nicely with your existing Django-admin workflow.

Install
=======

Install with pip ``pip install django-admin-flex`` or ``pip install http://github.com/ofa/django-admin-flex``

Add `'django_admin_flex',`` to your "INSTALLED_APPS" **before** `'django.contrib.admin'``

To customize the admin, create a new file in your django application's ``templates`` folder under the subfolder ``admin/base_site.html`` and paste in (then edit) the code found in the django-admin-flex `base_site.html`_ 

.. _base_site.html: https://github.com/ofa/django-admin-flex/blob/master/django_admin_flex/templates/admin/base_site.html



Customization
=============

Enable template customizations by adding a ``TEMPLATE_DIRS`` tuple to your settings file which points to a template directory where you would like any admin override templates to be located. For example a ``templates`` folder in your root directory:

.. code-block:: python

    TEMPLATE_DIRS = (
        os.path.join(BASE_DIR, "templates"),
    )

Any html template added to the ``admin`` directory within your configured ``templates`` directory will override the default templates. It is recommended to create a ``admin/base_site.html`` file for basic customizations. Here is an example of that file:

.. code-block:: html

    {% extends "admin/base.html" %}
    {% load i18n admin_static %}
    {% block title %}Site Admin{% endblock %}
    {% block footer_text %}Site Admin{% endblock %}

To add a custom Bootstrap theme, point to your css file within the ``bootstrap_css`` block in your ``base_site.html`` file. Here is an example that will use the alternative Bootstrap theme provided but you can use any Bootstrap theme you would like:

.. code-block:: html

    {% block bootstrap_css %}{% static "css/your-bootstrap-theme.min.css" %}{% endblock %}

There are many other blocks available in useful locations in the templates. Any other admin wide customizations can be made in your ``base_site.html`` file while other specific pages can be overriden and/or extended.

Issues and Contribution
=======================

Contributions are highly encouraged. Please submit them as pull requests at the `Django Admin Flex GitHub Repository`_

Compiling django-admin-flex base CSS files
------------------------------------------

NPM, Bower and Grunt are used to compile a mininimal set of styles for the admin that Bootstrap doesn't handle. To compile any customizations made to ``static/less/main.less`` or ``static/less/flex.less``, run:

  ``npm install``
  ``bower install``
  ``grunt``

Reporting an Issue
------------------

Feel free to report any issues or suggestions via github issues. Please include instruction for reproducing any issues - a screenshot may be helpful.

Contributing
------------

Please make sure that all pull requests involving style changes include a compiled and minified version of any code you're changing. Updating the ``version`` in ``setup.py`` would also be appreciated.

.. _Django Admin Flex GitHub Repository: https://github.com/ofa/django-admin-flex

Credits
=======

Django Admin Flex was built in-house at `Organizing for Action`_ by `Ben Korody`_ and the source code is available on the `Django Admin Flex GitHub Repository`_.

.. _Organizing for Action: https://www.barackobama.com/
.. _Ben Korody: http://benkorody.com/
