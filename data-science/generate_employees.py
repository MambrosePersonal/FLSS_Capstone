from faker import Faker

fake = Faker()

# Generate 200 names with first and last names
employee_names = [fake.first_name() + " " + fake.last_name() for _ in range(200)]

# Write the names to a file
with open('employees.txt', 'w') as file:
    for name in employee_names:
        file.write(name + '\n')

print("Generated list of 200 names for employees in 'employees.txt'.")
