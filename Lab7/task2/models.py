class Cosmetic:
    def __init__(self, name, brand, price):
        self.name = name
        self.brand = brand
        self.price = price

    def apply(self):
        return f"Applying {self.name}"

    def info(self):
        return f"{self.brand} - {self.name}: ${self.price}"

    def __str__(self):
        return f"{self.name} by {self.brand}, price: ${self.price}"


class Lipstick(Cosmetic):
    def __init__(self, name, brand, price, color):
        super().__init__(name, brand, price)
        self.color = color

    def apply(self):
        return f"Applying {self.color} lipstick 💄"

    def long_lasting(self):
        return "This lipstick lasts all day!"


class Skincare(Cosmetic):
    def __init__(self, name, brand, price, skin_type):
        super().__init__(name, brand, price)
        self.skin_type = skin_type

    def apply(self):
        return f"Applying skincare for {self.skin_type} skin 🧴"

    def hydrate(self):
        return "Hydrating your skin!"