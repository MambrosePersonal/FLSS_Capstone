from faker import Faker
import random

fake = Faker()

# Load employee names from employees.txt
with open('employees.txt', 'r') as file:
    employee_names = [line.strip() for line in file]

# Generate 50 unique names for managers
manager_names = []
while len(manager_names) < 50:
    manager_name = fake.first_name() + " " + fake.last_name()
    if manager_name not in employee_names and manager_name not in manager_names:
        manager_names.append(manager_name)

# Write the names to a file
with open('managers.txt', 'w') as file:
    for name in manager_names:
        file.write(name + '\n')

print("Generated list of 50 unique names for managers in 'managers.txt'.")
