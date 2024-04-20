<template>
    <div class="layout-menu-container h-screen overflow-auto pb-32">
        <ul class="layout-menu">
            <li>
                <TitleMenu title="DASHBOARDS"/>
                <ul>
                    <ContentMenu content="E-Commerce" icon="pi pi-home" linkRouter="/" />
                    <!-- <ContentMenu content="Banking" icon="pi pi-image" linkRouter="/dashboard-banking"/> -->
                </ul>  
            </li>
            <li> 
                <TitleMenu title="USER MANAGERMENT"/>
                    <ul>
                        <ContentMenu content="List" icon="pi pi-list" linkRouter="/profile/list" />
                        <ContentMenu content="Create" icon="pi pi-plus" linkRouter="/profile/create"/>
                         
                    </ul>
            </li>  
            <li> 
                <TitleMenu title="E-COMMERCE"/>
                    <ul>
                        <ContentMenu content="Product Overview" icon="pi pi-image" linkRouter="/ecommerce/product-overview"/>
                        <ContentMenu content="Product List" icon="pi pi-list" linkRouter="/ecommerce/product-list"/>
                        <ContentMenu content="New Product" icon="pi pi-plus" linkRouter="/ecommerce/new-product"/>
                        <ContentMenu content="Shopping Cart" icon="pi pi-shopping-cart" linkRouter="/ecommerce/shopping-cart"/>
                        <ContentMenu content="Checkout Form" icon="pi pi-check-square" linkRouter="/ecommerce/checkout-form"/>
                        <ContentMenu content="Order History" icon="pi pi-history" linkRouter="/ecommerce/order-history"/>
                        <ContentMenu content="Order Summary" icon="pi pi-file" linkRouter="/ecommerce/order-summary"/>
                         
                    </ul>
            </li>  
            <!-- <li>
                
                <TitleMenu title="APPS"/>
                <ul>
                    <ContentMenu content="Blog" icon="fa-regular fa-comment" linkRouter="/apps/blog"/>
                    <ContentMenu content="Calendar" icon="fa-regular fa-calendar" linkRouter="/apps/calendar"/>
                    <ContentMenu content="Chat" icon="fa-regular fa-comments" linkRouter="/apps/chat"/>
                    <ContentMenu content="Files" icon="fa-regular fa-folder" linkRouter="/apps/files"/>
                    <ContentMenu content="Mail" icon="fa-regular fa-envelope" linkRouter="/apps/mail"/>
                    <ContentMenu content="TaskList" icon="fa-regular fa-square-check" linkRouter="/apps/task-list"/>
                </ul>
            </li> -->
            <!-- <li> 
                <TitleMenu title="UI KIT"/>
                    <ul>
                        <ContentMenu content="Form Layout" icon="fa-regular fa-address-card" linkRouter="/ui-kit/form-layout"/>
                        <ContentMenu content="Input" icon="fa-regular fa-bookmark" linkRouter="/ui-kit/inputW"/>
                        <ContentMenu content="Float Label" icon="fa-regular fa-comments" linkRouter="/ui-kit/float-label"/>
                        <ContentMenu content="Invalid State" icon="fa-solid fa-circle-exclamation" linkRouter="/ui-kit/invalid-state"/>
                        <ContentMenu content="Button" icon="fa-solid fa-box" linkRouter="/ui-kit/button"/>
                        <ContentMenu content="Table" icon="fa-solid fa-table-cells-large" linkRouter="/ui-kit/table"/>
                        <ContentMenu content="List" icon="fa-solid fa-list" linkRouter="/ui-kit/list"/>
                        <ContentMenu content="Tree" icon="fa-solid fa-share-nodes" linkRouter="/ui-kit/tree"/>
                        <ContentMenu content="Panel" icon="fa-solid fa-mobile-button" linkRouter="/ui-kit/panel"/>
                        <ContentMenu content="Overlay" icon="fa-regular fa-clone" linkRouter="/ui-kit/over-lay"/>
                        <ContentMenu content="Media" icon="fa-regular fa-image" linkRouter="/ui-kit/media"/>
                        <ContentMenu content="Menu" icon="fa-solid fa-bars" linkRouter="/ui-kit/menu"/>
                        <ContentMenu content="Message" icon="fa-regular fa-comment" linkRouter="/ui-kit/message"/>
                        <ContentMenu content="File" icon="fa-regular fa-file" linkRouter="/ui-kit/file"/>
                        <ContentMenu content="Chart" icon="fa-solid fa-chart-column" linkRouter="/ui-kit/chart"/>
                        <ContentMenu content="Misc" icon="fa-regular fa-circle" linkRouter="/ui-kit/misc"/>      
                    </ul>
            </li>    -->
           
        </ul>
    </div>

</template>

<script>
    import TitleMenu from './title-menu/Title.vue'
    import ContentMenu from './content-menu/Content.vue'

    
   export default {
      name: 'LayoutMenuContainer',
      components : {
        TitleMenu,
         ContentMenu
         
      },
     

   }
</script>
<style>
.title, .layout-menu-container ul li i {
    color:#6366f1;
}
.layout-menu-container ul li i {
    padding-right: 0.75rem;
}
.title {
    padding:1rem 2rem;
}
.layout-menu ul li {
    padding: 0.75rem 2rem;
}
.layout-menu ul li:hover {
    background-color: #f6f9fc;

}
.layout-menu ul li:active {
    font-weight: bold;
}

</style>