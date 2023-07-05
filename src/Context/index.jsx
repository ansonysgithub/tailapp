import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

/**
 * This component is a provider for the shopping cart context.
 * @param {Object} props The component props.
 * @returns A provider for the shopping cart context.
 */
export const ShoppingCartProvider = ({ children }) => {
    // Manages the products that are shown in the home page
    const [products, setProducts] = useState([])

    // Manages the search by title input
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Manages the filtered products by title
    const [filteredItems, setFilteredItems] = useState([])

    // Fetch the products from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    // Filter the products by title
    const filteredItemsByTitle = (products, searchByTitle) => {
        return products?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(products, searchByTitle))
        }
    }, [products, searchByTitle])

    // Manages the number of products in the shopping cart
    const [count, setCount] = useState(0)

    // Manages the product detail modal
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Manages the checkout side menu modal
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Manages the product that is shown in the product detail modal
    const [productToShow, setProductToShow] = useState(false)

    // Shopping cart (for the checkout side menu)
    const [cartProducts, setCartProducts] = useState([])

    // Order history (for the checkout page)
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}