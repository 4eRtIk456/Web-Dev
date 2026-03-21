import json
import os
from models import Task


def load_tasks(filename: str) -> list:
    if not os.path.exists(filename):
        return []

    try:
        with open(filename, "r") as file:
            data = json.load(file)
            return [Task.from_dict(item) for item in data]
    except (json.JSONDecodeError, FileNotFoundError):
        return []


def save_tasks(filename: str, tasks: list) -> None:
    with open(filename, "w") as file:
        json.dump([task.to_dict() for task in tasks], file, indent=4)