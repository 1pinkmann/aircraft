class Tabs {
    constructor({wrapperID}) {
        this.tabs = document.getElementById(wrapperID);
        this.wrapper = this.tabs.querySelector('[data-tab-wrapper]');
        this.tabsMobileButton = document.getElementById('tabs-mobile-button');
        this.tabsMenuList = document.getElementById('tabs-menu-list');
        this.mobileText = this.tabsMobileButton.querySelector('[data-mobile-text]');

        this.handleGlobalClick = this.handleGlobalClick.bind(this);
        
        this.tabs.addEventListener('click', this.handleGlobalClick);
    }

    changeTabItem(menuButtonAttribute) {
        let tabItems = this.wrapper.querySelectorAll('[data-tab-item]');

        Array.from(tabItems).forEach(item => {
            if (item.getAttribute('data-tab-item') === menuButtonAttribute) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }

    handleGlobalClick(e) {
        let menuButton = e.target.closest('[data-tab-button]');
        let mobileButton = e.target.closest('#tabs-mobile-button');

        if (menuButton) {

            let menuButtonAttribute = menuButton.getAttribute('data-tab-button');
            let menuButtons = this.tabs.querySelectorAll('[data-tab-button]');

            Array.from(menuButtons).forEach(button => {
                if (button.getAttribute('data-tab-button') === menuButtonAttribute) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            })
            this.changeTabItem(menuButtonAttribute);

            if (document.body.clientWidth < 767) {
                this.tabsMenuList.classList.remove('opened');
                this.tabsMobileButton.classList.remove('opened');
                this.mobileText.textContent = menuButton.textContent;
            }

        } else if (mobileButton) {
            mobileButton.classList.toggle('opened');
            this.tabsMenuList.classList.toggle('opened');
        }
    }
}

window.Tabs = Tabs;