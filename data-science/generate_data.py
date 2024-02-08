import json
import random
from datetime import datetime, timedelta
from faker import Faker

fake = Faker()

# Set a random seed for reproducibility
random.seed(42)

# Generate a list of 200 unique names for employees
with open('managers.txt', 'r') as file:
    manager_names = [line.strip() for line in file.readlines()]

# Generate a list of 200 unique names for employees
with open('employees.txt', 'r') as file:
    employee_names = [line.strip() for line in file.readlines()]

# Function to generate a random string representing a software task
def generate_task_description():
    adjectives = ['Design', 'Implement', 'Test', 'Debug', 'Optimize', 'Document']
    nouns = ['user interface', 'backend logic', 'database schema', 'algorithm', 'integration module']
    return random.choice(adjectives) + ' ' + random.choice(nouns)

def generate_data():
    data = []
    
    for proj_id in range(1, 1001):  # Iterate over 1000 projects
        project = {
            "proj_id": proj_id,
            "team_size": random.randint(1, 10),
            "budget": round(random.uniform(10000, 15000), 2),
            "workload": random.choice(["low", "medium", "high"]),
            "completion_time": random.randint(30, 360),  # Represented in days
            "assigned_manager": random.choice(manager_names),  # Randomly select a manager from the list
            "tasks": []
        }
        
        task_due_date = datetime.now() + timedelta(days=random.randint(1, 365))  # Random date within the next year
        
        # Generate up to 4 tasks for each project
        for i in range(random.randint(1, 4)):
            person_assigned = random.choice(employee_names)  # Randomly select an employee from the list
            task = {
                "id": (i+1),
                "description": generate_task_description(),
                "status": random.choice(["complete", "incomplete"]),
                "person_assigned": person_assigned,
                "due_date": task_due_date.strftime("%Y-%m-%d"),
                "estimated_duration": random.randint(1, 10)
            }
            project["tasks"].append(task)
        
        data.append(project)
    
    return data

if __name__ == "__main__":
    all_data = generate_data()
    
    with open('generated_data.json', 'w') as json_file:
        json.dump(all_data, json_file, indent=4)
    
    print("Generated data saved to 'generated_data.json' file.")
