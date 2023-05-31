from sqlalchemy import func
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer(), primary_key = True)
    name = Column(String(), unique = True)
    username = Column(String())
    email = Column(String())
    password = Column(String())
    submissions = relationship("Submission",back_populates='user')
    def __repr__(self):
        return f'<User: \
                 username: {self.username} >\
                 '
    
class Problem(Base):
    __tablename__ = 'problems'

    id = Column(Integer(), primary_key = True)
    title = Column(String(), unique = True)
    description = Column(String())
    difficulty_level = Column(String())

    # relationship
    
    submissions = relationship("Submission",back_populates='problem')
   

    def __repr__(self):
        return f'<Problem: \
                 Problem title: {self.title}> \
                 '
    
class Submission(Base):
    __tablename__ = 'submissions'

    id = Column(Integer(), primary_key = True)
    code = Column(String())
    number_of_attempts = Column(Integer())
    created_at = Column(DateTime(), server_default=func.now())
    user_id = Column(Integer(), ForeignKey("users.id"))
    problem_id = Column(Integer(), ForeignKey("problems.id"))

    # relationship
    user = relationship("User", back_populates='submissions')
    problem = relationship("Problem",back_populates='submissions')

    def __repr__(self):
        return f'<Submission: \
                 number_of_attempts: {self.number_of_attempts}> \
                 '
