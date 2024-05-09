interface CardItem {
    id: number;
    image: string;
    name: string;
    price: number;
    categoryId: string;
}

// Define an interface for the fetched data structure if necessary
interface CardData {
    cards: CardItem[];
}