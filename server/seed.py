from faker import Faker
import random
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from random import choice as rc
from models import User, Problem, Submission
from problems_db import given_problems
from fake_submissions_db import given_fake_submissions
fake = Faker()

if __name__ == '__main__':
    
    engine = create_engine('sqlite:///problems.db')
    Session = sessionmaker(bind=engine)
    session = Session()
    session.query(User).delete()
    session.query(Problem).delete()
    session.query(Submission).delete()
    
    users = []
    print('Seeding Users...')
    for _ in range(20):
        u = fake.profile()
        user = User(
            
            name = fake.unique.name(),
            username = fake.user_name(),
            email = fake.email(),
            password = fake.password()
        )
        users.append(user)
        session.add(user)
        session.commit()

    problems = []
    print('Seeding Problems....')
    for given_problem in given_problems:
        problem = Problem(
            title = given_problem['title'],
            description = given_problem['description'],
            difficulty_level = given_problem['difficulty_level']
        )
        problems.append(problem)
        session.add(problem)
        session.commit()

    submissions = []
    print('Seeding Submissions....')
    for fake_submission in given_fake_submissions:
        submission = Submission(
            code = fake_submission['code'],
            number_of_attempts = random.randint(1,15),
            user_id = random.randint(1,len(users)),
            problem_id = random.randint(1,len(problems))
        )
        problems.append(submission)
        session.add(submission)
        session.commit()