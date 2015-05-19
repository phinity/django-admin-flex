#!/usr/bin/env python

import os
import textwrap

from setuptools import setup, find_packages

ROOT = os.path.abspath(os.path.dirname(__file__))
readme = textwrap.dedent(open(os.path.join(ROOT, 'README.rst')).read())

setup(
    name='django_admin_flex',
    version='0.0.2',
    author='Ben Korody',
    author_email='ibben@gmail.com',
    license='MIT',
    description='Django Admin Optomized for Bootstrap',
    long_description=readme,
    url='https://github.com/ofa/django-admin-flex',
    packages=find_packages()
)
