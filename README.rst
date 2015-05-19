*****************
Django Admin Flex
*****************

An admin theme for Django >= 1.6 setup for Bootstrap 3.

About
=====

Included is a vanilla version of Bootstrap 3 as well as a customized Bootstrap 3 theme that can be used, or use your own bootstrap theme to match the style of your front-end site (see customization instructions below).

Features
========

* Rock solid admin templates that can be used with any Bootstrap theme
* Two no-clutter themes included: "Bootstrap's Vanilla" and Bento-box
* Full/fluid width listing page for content heavy admins
* Always-visible change form actions
* No fuss: these templates will fit in nicely with your existing Django-admin workflow.

Install
=======

Install with pip ``pip install django-admin-flex`` or ``pip install http://github.com/ofa/django-admin-flex``

Add `'django_admin_flex',`` to your "INSTALLED_APPS" **before** `'django.contrib.admin'``

Customization
=============

Enable template customizations by adding a ``TEMPLATE_DIRS`` tuple to your settings file that points to a template directory where you would like any admin override templates to be located. For example a ``templates`` folder in your root directory:

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

To add a custom bootstrap theme, point to your css file within the ``bootstrap_css`` block in your ``base_site.html`` file. Here is an example that will use the alternative bootstrap theme provided but you can use any bootstrap theme you would like:

.. code-block:: html

    {% block bootstrap_css %}{% static "css/your-bootstrap-theme.min.css" %}{% endblock %}

There are many other blocks available in useful locations in the templates. Any other admin wide customizations can be made in your ``base_site.html`` file while other specific pages can be overriden and/or extended.

Issues and Contribution
=======================

Feel free to report any issues or sugestions. Please include instruction for reproducing any issue, a screenshot may be helpful.

Pull requests are welcomed! Please be clear about what is being updated and how it can be reviewed in the interface.

Credits
=======

Django Admin Flex was built in-house at `Organizing for Action`_ by `Ben Korody`_ and the source code is available on the `Django Admin Flex GitHub Repository`_.

.. _Organizing for Action: https://www.barackobama.com/
.. _Ben Korody: http://benkorody.com/
.. _Django Admin Flex GitHub Repository: https://github.com/ofa/django-admin-flex
