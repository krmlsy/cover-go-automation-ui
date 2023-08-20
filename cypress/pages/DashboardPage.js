class DashboardPage {
    elements = {
      dashboardHeader: () => cy.xpath("//h6[ text() = 'Dashboard' ]"),
    };
  
    checkDashboardHeader() {
      this.elements.dashboardHeader().should('be.visible')
    }

  }
  
  export const dashboardPage = new DashboardPage();
  