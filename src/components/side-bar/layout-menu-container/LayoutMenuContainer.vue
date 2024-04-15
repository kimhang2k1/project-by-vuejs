<template>
    <div class="layout-menu-container h-screen overflow-auto">
        <ul class="layout-menu">
            <li>
                <TitleMenu title="DASHBOARDS"/>
                <ul>
                    <ContentMenu content="E-Commerce" icon="fa-solid fa-house"/>
                    <ContentMenu content="Banking" icon="fa-regular fa-image"/>
                </ul>  
            </li>
            <li>
                <TitleMenu title="APPS"/>
                <ul>
                    <ContentMenu content="Blog" icon="fa-regular fa-comment"/>
                    <ContentMenu content="Calendar" icon="fa-regular fa-calendar"/>
                    <ContentMenu content="Chat" icon="fa-regular fa-comments"/>
                    <ContentMenu content="Files" icon="fa-regular fa-folder"/>
                    <ContentMenu content="Mail" icon="fa-regular fa-envelope"/>
                    <ContentMenu content="TaskList" icon="fa-regular fa-square-check"/>
                </ul>
            </li>
            <li> 
                <TitleMenu title="UI KIT"/>
                    <ul>
                        <ContentMenu content="Form Layout" icon="fa-regular fa-address-card"/>
                        <ContentMenu content="Input" icon="fa-regular fa-bookmark"/>
                        <ContentMenu content="Float Label" icon="fa-regular fa-comments"/>
                        <ContentMenu content="Invalid State" icon="fa-solid fa-circle-exclamation"/>
                        <ContentMenu content="Button" icon="fa-solid fa-box"/>
                        <ContentMenu content="Table" icon="fa-solid fa-table-cells-large"/>
                        <ContentMenu content="List" icon="fa-solid fa-list"/>
                        <ContentMenu content="Tree" icon="fa-solid fa-share-nodes"/>
                        <ContentMenu content="Panel" icon="fa-solid fa-mobile-button"/>
                        <ContentMenu content="Overlay" icon="fa-regular fa-clone"/>
                        <ContentMenu content="Media" icon="fa-regular fa-image"/>
                        <ContentMenu content="Menu" icon="fa-solid fa-bars"/>
                        <ContentMenu content="Message" icon="fa-regular fa-comment"/>
                        <ContentMenu content="File" icon="fa-regular fa-file"/>
                        <ContentMenu content="Chart" icon="fa-solid fa-chart-column"/>
                        <ContentMenu content="Misc" icon="fa-regular fa-circle"/>      
                    </ul>
            </li>   
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

</style>