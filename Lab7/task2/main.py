from models import Cosmetic, Lipstick, Skincare

def main():
    product1 = Cosmetic("Face Cream", "Nivea", 10)
    product2 = Lipstick("Matte Lipstick", "Maybelline", 12, "Red")
    product3 = Skincare("Serum", "The Ordinary", 15, "Oily")

    products = [product1, product2, product3]

    for product in products:
        print(product) 
        print(product.info())
        print(product.apply())  
        print("-" * 30)


if __name__ == "__main__":
    main()