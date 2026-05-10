Directory structure:
└── zademanish-ecommerce-app/
    ├── backend/
    │   ├── package.json
    │   ├── seeder.js
    │   ├── server.js
    │   ├── vercel.json
    │   ├── config/
    │   │   └── db.js
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   ├── models/
    │   │   ├── Cart.js
    │   │   ├── Checkout.js
    │   │   ├── Order.js
    │   │   ├── Product.js
    │   │   ├── Subscriber.js
    │   │   └── User.js
    │   └── routes/
    │       ├── adminOrderRoutes.js
    │       ├── adminRoutes.js
    │       ├── cartRoutes.js
    │       ├── checkoutRoute.js
    │       ├── orderRoutes.js
    │       ├── productAdminRoutes.js
    │       ├── productRoutes.js
    │       ├── subscribeRoutes.js
    │       ├── uploadRoutes.js
    │       └── userRoutes.js
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vercel.json
        ├── vite.config.js
        └── src/
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── components/
            │   ├── Admin/
            │   │   ├── AdminLayout.jsx
            │   │   ├── AdminSidebar.jsx
            │   │   ├── EditProductPage.jsx
            │   │   ├── OrderManagement.jsx
            │   │   ├── ProductManagement.jsx
            │   │   └── UserManagement.jsx
            │   ├── Cart/
            │   │   ├── CartContext.jsx
            │   │   ├── Checkout.jsx
            │   │   └── PayPalButton.jsx
            │   ├── Common/
            │   │   ├── Footer.jsx
            │   │   ├── Header.jsx
            │   │   ├── Navbar.jsx
            │   │   ├── ProtectedRoute.jsx
            │   │   └── SearchBar.jsx
            │   ├── Layout/
            │   │   ├── CartDrawer.jsx
            │   │   ├── Hero.jsx
            │   │   ├── Topbar.jsx
            │   │   └── UserLayout.jsx
            │   └── Products/
            │       ├── FeaturedCollection.jsx
            │       ├── FeaturesSection.jsx
            │       ├── FilterSidebar.jsx
            │       ├── GenderCollectionSection.jsx
            │       ├── NewArrivals.jsx
            │       ├── ProductDetails.jsx
            │       ├── ProductGrid.jsx
            │       └── SortOptions.jsx
            ├── pages/
            │   ├── AdminHomePage.jsx
            │   ├── CollectionPage.jsx
            │   ├── Home.jsx
            │   ├── Login.jsx
            │   ├── MyOrdersPage.jsx
            │   ├── OrderConfirmationPage.jsx
            │   ├── OrderDetailsPage.jsx
            │   ├── Profile.jsx
            │   └── Register.jsx
            └── redux/
                ├── store.js
                └── slices/
                    ├── adminOrderSlice.js
                    ├── adminProductSlice.js
                    ├── adminSlice.js
                    ├── authSlice.js
                    ├── cartSlice.js
                    ├── checkoutSlice.js
                    ├── orderSlice.js
                    └── productSlice.js
