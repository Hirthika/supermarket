from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="hitesh",
                          email="vasanth@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="8056093606",
                          gender="Male"
                          )
        user.set_password("vasanth007")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data)
    ]