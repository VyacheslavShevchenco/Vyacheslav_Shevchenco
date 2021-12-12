const {Builder, By, Key, util, Actions, List, WebElement, Arrays} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
        
        await driver.get('https://opensource-demo.orangehrmlive.com/');
        await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
        await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);

        await driver.sleep(3000);

        await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
        await driver.findElement(By.id("menu_admin_Job")).click();
        await driver.findElement(By.id("menu_admin_viewJobTitleList")).click();

        await driver.sleep(3000);
        
        await driver.findElement(By.id("btnAdd")).click();
        await driver.findElement(By.id("jobTitle_jobTitle")).sendKeys("Front-end");
        await driver.findElement(By.id("jobTitle_jobDescription")).sendKeys("experience with JS, React");
        await driver.findElement(By.id("jobTitle_note")).sendKeys("work in the office and remotely");
        await driver.findElement(By.id("btnSave")).click();

        await driver.sleep(3000);

        const el = await driver.findElement(By.xpath("//td[@class='left']/a[text()='Front-end']"));
        const row = await el.findElement(By.xpath("./../.."));

        //proverka stroki
        await row.findElement(By.xpath('td[text()="experience with JS, React"]'));
        await row.findElement(By.xpath('td[1]/input')).click();

        await driver.sleep(3000);        
        
        //redaktirovanie
        await driver.findElement(By.xpath("//td[@class='left']/a[text()='Front-end']")).click();
        await driver.findElement(By.id("btnSave")).click();
        await driver.findElement(By.id("jobTitle_jobDescription")).clear();
        await driver.findElement(By.id("jobTitle_jobDescription")).sendKeys("experience with cutting-edge frameworks/libraries for SPAs");
        await driver.findElement(By.id("btnSave")).click();
        
        await driver.sleep(3000);
          
        const el1 = await driver.findElement(By.xpath("//td[@class='left']/a[text()='Front-end']"));
        const row1 = await el1.findElement(By.xpath("./../.."));
        //proverka
        if (
            
                await row1.findElement(By.xpath("//td[@class='left']/a[text()='Front-end']")).isDisplayed() &&
            
                await row1.findElement(By.xpath('td[text()="experience with cutting-edge frameworks/libraries for SPAs"]')).isDisplayed()
            
        ) {
            console.log("Job Title is displayed");
            await row1.findElement(By.xpath('td[1]/input')).click();
        }

        //udalenie
        await driver.findElement(By.id("btnDelete")).click();
        await driver.findElement(By.id("dialogDeleteBtn")).click();         
        //proverka udaleniya
        try {
            await row.findElement(By.xpath("//td[@class='left']/a[text()='Front-end']")).isDisplayed()
          } catch (e) {
            console.log('Job Title is deleted');
                      }

};
example();