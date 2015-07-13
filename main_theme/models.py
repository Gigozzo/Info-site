from django.db import models

class News(models.Model):
	title = models.CharField(max_length=255)
	content = models.TextField(max_length=10000)
	datetime = models.DateTimeField(u'Date')