from setuptools import setup, find_packages
readme = open('README.md').read()
setup(name='django_admin_flex',
      version='0.9.0',
      author='Ben Kenobi',
      author_email='ibben@gmail.com',
      license='MIT',
      description='Django Admin Optomized for Bootstrap',
      long_description=readme,
      packages=find_packages())
