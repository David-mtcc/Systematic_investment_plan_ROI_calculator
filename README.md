# Systematic_investment_plan_ROI_calculator
Simulates the growth of an investment with monthly contributions and continuous compounding. Includes a custom Google Sheets function to calculate total capital over time, comparing simple growth vs regular investing. Ideal for financial planning and savings projections.

## 🛠️ How to Use in Google Sheets

1. **Open the spreadsheet**  
   - Upload the `.xlsx` file to your Google Drive  
   - Right-click it → **Open with > Google Sheets**

2. **Add the Apps Script**  
   - Go to **Extensions > Apps Script**  
   - Delete any placeholder code  
   - Paste the contents of `Capitale_Continuo.gs` (from this repo) into the editor  
   - 📛 **Important:** Name the script file exactly `Capitale_Continuo.gs` (case-sensitive)  
   - Click **Save**

3. **You're ready!**  
   - Now you can use the Google Sheet to calculate the Return On Investment of your investment plan 💰
  
## 🔢 Mathematical Background


**The total capital at year \( n \) (Totalₙ) is computed iteratively as:**

```math
\mathrm{Total}_n = \mathrm{Total}_{n-1} e^{r} + \sum_{i=1}^{12} C e^{r \frac{12 - i + 1}{12}}
```
where:

- $\{Total}_{n-1}$ is the capital at the end of the previous year  
- $r$ is the annual interest rate  
- $C$ is the monthly contribution   
- Each monthly contribution is compounded continuously for the remaining fraction of the year.

This recursive formula reflects:

- The initial capital and previously accumulated amount growing continuously for one full year,  
- Plus the value of all monthly deposits made during the current year, each compounded continuously from the month of deposit until the year’s end.

By iterating this calculation year by year, the program accurately simulates investment growth combining continuous compounding and regular savings.
