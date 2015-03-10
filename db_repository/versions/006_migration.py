from sqlalchemy import *
from migrate import *


from migrate.changeset import schema
pre_meta = MetaData()
post_meta = MetaData()
job_pref = Table('job_pref', post_meta,
    Column('id', Integer, primary_key=True, nullable=False),
    Column('user_id', Integer),
    Column('current_location', String(length=120)),
    Column('current_ctc', Integer),
    Column('expected_ctc', Integer),
    Column('notice_period', Integer),
)

misc = Table('misc', post_meta,
    Column('id', Integer, primary_key=True, nullable=False),
    Column('user_id', Integer),
    Column('one_liner', String(length=240)),
)

pref_loc = Table('pref_loc', post_meta,
    Column('id', Integer, primary_key=True, nullable=False),
    Column('user_id', Integer),
    Column('pref_loc', Integer),
)

social = Table('social', post_meta,
    Column('id', Integer, primary_key=True, nullable=False),
    Column('user_id', Integer),
    Column('facebook', String(length=120)),
    Column('twitter', String(length=120)),
    Column('linkedin', String(length=120)),
    Column('github', String(length=120)),
)


def upgrade(migrate_engine):
    # Upgrade operations go here. Don't create your own engine; bind
    # migrate_engine to your metadata
    pre_meta.bind = migrate_engine
    post_meta.bind = migrate_engine
    post_meta.tables['job_pref'].create()
    post_meta.tables['misc'].create()
    post_meta.tables['pref_loc'].create()
    post_meta.tables['social'].create()


def downgrade(migrate_engine):
    # Operations to reverse the above upgrade go here.
    pre_meta.bind = migrate_engine
    post_meta.bind = migrate_engine
    post_meta.tables['job_pref'].drop()
    post_meta.tables['misc'].drop()
    post_meta.tables['pref_loc'].drop()
    post_meta.tables['social'].drop()
