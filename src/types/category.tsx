interface CategoryItem {
    id: number;
    name: string;
    image: string;
}

// Define an interface for the fetched data structure if necessary
interface CategoryItem {
    categories: CategoryItem[];
}