from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import User, Problem, Submission

if __name__ == '__main__':

    engine = create_engine('sqlite:///problems.db')
    Session = sessionmaker(engine)
    session = Session()

    import ipdb;
    ipdb.set_trace()