
interface MenuItem {
    title: string;
    url: string;
    cName: string;
    icon: string;
  }

export const MenuItems:MenuItem[] = [
    {
        title : "Acceuil",
        url : "/",
        cName : "nav-links",
        icon : "fa-solid fa-house-user"
    },
    {
        title : "À propos",
        url : "/about",
        cName : "nav-links",
        icon : "fa-solid fa-circle-info"
    }, 
    
    {
        title : "Services",
        url : "/service",
        cName : "nav-links",
        icon : "fa-solid fa-briefcase"
    },
    
    {
        title : "Contact",
        url : "/contact",
        cName : "nav-links",
        icon : "fa-solid fa-address-book"
    },
    
    // {
    //     title : "Sign Up",
    //     url : "/signup",
    //     cName : "nav-links-mobile",
    // },
    

]