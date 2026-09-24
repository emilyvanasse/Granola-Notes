# BUAN-210-K: INTRO TO DATA

- **Date:** Sep 14, 2026 11:00 AM EDT
- **Class:** BUAN-210 — Introduction to Data
- **Granola note:** https://notes.granola.ai/d/9d2192c4-b247-48e8-ae1f-e36161a79dcd
- **Attendees:** Emily Vanasse (note creator) <emilygvanasse@gmail.com>

## Summary

# Admin and SAM Assignment Updates

- SAM upload issue causing zeros: due dates extended on all assignments
  - Calendar view in SAM will show week 3 projects appearing in week 4, can ignore if already completed
  - Only resubmit if there's an issue
- Exam on the 30th, proctored and separate from class
  - Sign-up sheet released early November
  - Must still attend class after taking the exam
- Message the instructor directly, not email
- Make-up option: Monday 9:30 AM same room, or Wednesday online at 8 AM

# File and Submission Setup

- Two Excel files downloaded for today's session, plus one instruction file
- Ignore any instructions to create or use a different file; use the downloaded ones
- Save files locally (C drive), not on OneDrive
  - OneDrive submissions send a link, not the file itself
- Submit as .xlsx, not a OneDrive link
- Only one Excel file to submit for this module

# Key Excel Concepts: Statistical Functions

- Mean = average (Sigma button on Home ribbon, or type =AVERAGE)
- Median = middle number
  - Even count: takes average of the two middle numbers (e.g., 7 and 9 → 8)
- Mode = most frequently occurring value
  - Type =MODE(range) directly; square brackets in syntax = optional arguments
- Constants and units: store values like tax rate in their own cell, reference by cell address
  - Changing the constant updates all formulas automatically

# Cell References: Relative, Absolute, and Mixed

- Relative reference: adjusts row/column when copied (default behavior)
- Absolute reference: use $ or press F4 to lock a cell (e.g., $J$2)
  - Use when a constant like tax rate must not shift when formula is copied
- Mixed reference: lock only the column ($A5) or only the row (A$4)
  - Lock the column when copying across rows; lock the row when copying down columns
  - One formula with mixed references can fill an entire multiplication table

# Productivity Shortcuts and Fill Handle

- Fill handle (black crosshair in cell corner): drag to fill, or double-click to auto-fill to end of data
  - After filling, use the Quick Access dropdown to select "Fill Without Formatting" to preserve banding
- Key shortcuts covered:
  - Ctrl+Shift+F1: toggle ribbon on/off fully
  - Ctrl+F1: collapse ribbon but keep tab names
  - Ctrl+Down/Up Arrow: jump to end/start of data in a column
  - Ctrl+~ (tilde): toggle Show Formulas view
  - Ctrl+R: fill right
  - Ctrl+Plus / Ctrl+Minus: insert or delete row/column

# Dynamic Arrays and Time Calculations

- Dynamic arrays: enter a range formula (e.g., =A5:A14 * B4:G4) and Excel auto-fills results
  - Inserting a column within the range updates the array automatically
  - Spill error occurs if any cell in the output range already contains data; clear the range to fix
- Time calculations: subtracting two times gives a fraction of a day
  - Convert to seconds: multiply by 24 * 60 * 60
  - Format as General Number, then decrease decimals as needed

# Next Steps

- **Complete SAM Training Module 3 tonight**

  Takes roughly 20 minutes; due Wednesday night.
- **Finish and submit the call center Excel file by Wednesday**

  Only one file to submit; can resubmit up to 10 times to check work.

## Transcript

Microphone: All right, everybody, let's go to Blackboard.

Microphone: You can use the Excel guides if you have an Excel problem, but with the SAM thing, it's not uploading and getting the zeros.

Microphone: The project— so it's going to be a little confusing because now you're going to see, like, for week 4, you're going to see all the projects showing up again that you already did.

Microphone: I did extend the projects because some people got zeros because I extended the due dates and you didn't do it by the first date.

Microphone: Leave the due dates.

Microphone: Extended date, it should have accepted it.

Microphone: So I'm extending the dates on all the assignments. So if you did it already, it'll be confusing because when you do the calendar view in SAM, it will show all these things in week 4, but you did it in week 3. You can use the Excel guides if you want, so you obviously ignore it because you completed it. Only if you have an issue, you have to resubmit it again. Hopefully it works. Okay, so our exam will be on the 30th. Right, and remember, always message me. Don't email me because I don't check my email very often.

Microphone: Keep messaging me, right? If you have questions. And remember, our goal is to take the exam. Remember, the exam is proctored, it's not in this class, right? It's totally separate. Um, and in November there'll be a sign-up And after you take the exam, you still come to class. It's not— you got to come every day to class.

Microphone: That's one of the main goals is that certification exam, and the sign-up sheet doesn't come out till early November, so we're not there yet. Okay, so everybody, we're on Module 3. We're on Module 3. expand Module 3. And, uh, so as the usual, we're going to do the, uh, oh, SAM 3, it's just an Let me just change the order here. I'll just write it up. It's the textbook we do, right? We do the SAM textbook. The training is that simulation with Excel where it tells you what to do and you follow along. So everyone's doing the textbook. Now notice the due date.

System audio: Absolute references are often used in formulas that calculate percentages or share of total.

Microphone: So you can try if you want and upload because you'll— I only keep it halfway until you resubmit it. We should have it done by Wednesday, but there is an assignment tonight. Tonight you got to do the, uh, Today's 14th. Today's 14th. Yeah, excuse myself. 16th. So this is not due You got to do the SAM training module. That's probably— any questions? Probably takes 20 minutes.

System audio: Select cell G5.

System audio: Type equal sign in cell G5.

System audio: Excel will enter a formula in cell G5.

System audio: Click cell F5.

System audio: Excel adds F5 as an argument in the formula.

System audio: Type asterisk after the F5 cell reference.

System audio: Click cell J2.

Microphone: Take your 40s off that.

System audio: The formula in cell G5 now reads F5 times J2, which means Excel will multiply the value in cell F5 by the value in cell J2.

Microphone: I don't care how many times you try it. All right, so Sam, start this up.

System audio: Press F4.

System audio: Excel changes the relative cell reference J2 to absolute cell reference $J$2. If you copy this formula into the cell below, G6, The reference to cell J2 will remain static, while the cell reference in the numerator will change to F6.

Microphone: Uh, up here, unless you start files, ignore, ignore, disregard the textbook instructions that tell you to create a new file or use a file, right? So we're using it, we're using 2 files today. 2 Excel files and, uh, and one instruction file. So let's download both of them.

System audio: Press Enter.

Microphone: And I'm on Chrome, so Chrome is nice and convenient, tells me right there. I don't know what Safari does right there. And if you have consistent problems on your Apple, you got to use this in here. Unless you want to try to figure it out, use the PCs that pop up, right?

Microphone: And you can remember it is on PC, so you want to be proficient.

Microphone: Maybe practice for a week just on the PC before they take your certification exam, your MO-210, Microsoft Office. So I downloaded one, I gotta download, uh, the second one.

Microphone: Okay, so they're there. I got my 2 files. I know where they are. My instructions start here. It opens up the book. I go for the sand blue arrow.

Microphone: Down arrow on this page. I scroll down, look for the sand— there it is, sand blue arrow. Ignore, ignore the files, right? We have our files, we ignore the files. Call center, call center. All right, so go to the call center.

Microphone: All right, well, that means we need to open up our file.

Microphone: Not the one they asked us to do, but the one we downloaded.

Microphone: And I have it right here. I know where it is, but I can just click on them. It'll open it directly right through the folder. Be careful if you're saving your files up on OneDrive.

System audio: Use the Quick Analysis Tool to enter a formula with a common function, such as SUM, COUNT, or AVERAGE, next to a selected range.

Microphone: Uh, the file, the link on OneDrive, the link, not the actual file. It's not going to send the correct file. So maybe download it or save it on your C drive and very— make sure you have a folder, right, for Sacred Heart University Fall 2026. And then you have one for each class. So make sure you're organized so you know where to find your files.

System audio: Position the mouse pointer over cell D5, press and hold the left mouse button, drag the mouse down until it is over cell I12, and then release the mouse button.

System audio: The range D5 through I12 is selected. The Quick Analysis button appears.

Microphone: All right, so that being said, make sure that you open up your file, or, uh, when you submit it, that it's a file, an XLS file, not a link to the file on your OneDrive. All right, so I'm going to open up my— I had downloaded it already, so I have a second copy here, but I want the one. Open the one, not the two. We want the one, right? All right, that— oh, I have something over here.

Microphone: So here, here is our file. So what's the first thing you do? You're an analyst, you get it, you get a new file. What do you want to do? What do you want to do when you get a new file? Well, check it out, get an overview. How big is it? What's the data about? All right, so okay, documentation, that's nice. They get you the documentation. It doesn't have the author data, I guess that's up to you. A call center log, what's this? I'm going to double-click. Anywhere on top. Oh, enable editing, enable editing. Make sure you do that.

Microphone: Enable your editing.

Microphone: All right, and I got James online. Okay, can you hear me, James, online?

Microphone: Yeah, great. Okay, so good guys, you can't make it to class or you just want to do it on Zoom, you can do it on Zoom.

Microphone: All right.

Microphone: And you can also come to my 9th grade class on Monday if you're going to miss this class for some reason.

Microphone: Wednesday one is online, uh, usually at 8 o'clock in the morning too.

Microphone: I got crazy hours. So Monday, 9:30, same room if you can't make this class. Excel and it talks to you, tells you what to click on. That's a trained Excel training, so that, that's, you know, you can follow that. This is due Wednesday night, but you can submit it if you want and get it, you know.

Microphone: We're not going to finish it.

Microphone: But you can reach it in.

Microphone: I'll change it to, uh, 10 times so you can resubmit it and check your work. All right, but it's due Wednesday night. Okay, so I'm here in the call center here. Enable everything. All right, so that's fine. If I double-click on the Home or I go over here, over here on the little arrow, what happens when I click on this arrow? What happens? The arrow on the menu, what happens?

System audio: Use the TODAY function to date stamp worksheets when they are opened.

Microphone: I, I, I, I didn't pop up. Go full screen. Oh, what happened there? Oh, look at that. Yeah, the ribbon entirely. All right, but the ribbon, the arrows So there, that arrow is for the— this one is for the formula bar.

System audio: Select cell B3.

System audio: Click the Formulas tab on the ribbon.

System audio: In the Function Library group, click the Date and Time button.

System audio: The Date and Time gallery appears.

System audio: Click Today.

Microphone: Now that just expands that. How do I get that back? I have 3 dots up here.

System audio: The Function Arguments dialog box opens, explaining that the TODAY function takes no function arguments.

Microphone: I can collapse the ribbon entirely and that'll give me— how many cells do I have? I got like 20, 22, 22 rows. How many rows do I have? 22 rows. It's a little blocked by the zoom window there.

Microphone: Uh, if you full screen, open full screen.

Microphone: I'm gonna, I'm gonna do, uh, guys, just follow this. Ctrl+Shift+F1 will actually toggle that. Ctrl+Shift+F1. So if I ever just move the ribbon, I know Ctrl+Shift+F1 will toggle it. Shift F1. If I do Control Shift F1 again, I got everything back. Everyone follow me? Control Shift 1. But if I just do, uh, Control F1, I can collapse— I can collapse the ribbon but keep the tab names. See the difference? I have the tab names and I can click on them, and if I double-click on any one of them, it also does the same action. Double-click, I can, you know, and now I get— I have 6— 17 rows showing, 16 and a half, right? If I double-click it

Microphone: So I have 16, but if I click it, now I only have 12 rows showing, right? 12 rows.

Microphone: So I might want to minimize that sometimes.

Microphone: All right, um, all right, so, uh,

System audio: Use the IF function to sort through a list of values to determine which ones meet a certain criterion, such as achieving a minimum score or grade. Assign one result to values that meet your criteria, such as Yes, and another for those that do not, such as No.

System audio: Select cell E5.

Microphone: Here they are.

System audio: Click the Formulas tab on the ribbon.

Microphone: Right, so actually, I know you guys.

Microphone: All right, so, um, I'm actually going to put this on the other screen so people online understand reading instructions.

System audio: In the Function Library group, click the Insert Function button.

System audio: Excel inserts an equal sign in the formula bar, indicating you will be inserting a formula in cell E5. The Insert Function dialog box opens.

Microphone: It looks like I got a cool idea about the image.

System audio: Click the Or Select a Category arrow.

Microphone: Um, answers.

Microphone: Scroll over here. I'm using this one. I can hit 1 on the keyboard to scroll to the right. Alt+Page Down will jump one page to the right. Scroll to the left, right? So, okay, so it goes down to N. All right, how much data do I have? How much data do I have? What's the shortcut to get to control? What's the shortcut to get to anyone on keyboard? What's the shortcut to get to anyone on keyboard?

System audio: Excel displays a list of function categories.

System audio: Click Logical.

System audio: Excel displays a list of logical functions in the Select a Function box.

System audio: Click If.

System audio: Click OK.

System audio: The Function Arguments dialog box opens with text boxes for entering function arguments. The insertion point is in the Logical Test text box, which will contain the argument that represents the condition the function will check for.

Microphone: Go home. Go home. I did go home. What's the shortcut to get to my data?

System audio: Type D5 100000 in the Logical Test box.

Microphone: For what?

Microphone: Control N, control N, the N, control N, right? And okay, so you went down to M. I'm in M and I can see data in row 33, so N must be somewhere up on the top. But somewhere in there there's data, and I have 333 with my last row. Everyone follow? So I, I have— I know what data I'm working with exactly. So about 300 rows of data.

System audio: Use the If function to sort through a list of values to determine which ones meet a certain criterion, such as achieving a minimum score or grade. Assign one result to values that meet your criteria, such as Yes, and another for those that do not, such as No. Select cell E5. Click the Formulas tab on the ribbon.

Microphone: And the way you plan, that's all you do.

System audio: In the— Excel inserts an equal sign in the formula bar, indicating you will be inserting a formula in cell E5. The Insert Function dialog box opens.

Microphone: You see what I got?

Microphone: The opportunity.

Microphone: So I got a formula sheet, documentation. So that's a worksheet, give yourself the purpose, outline the data for physical building, a call log. So it's a That's good.

System audio: Click the All button. Excel displays a list of function categories.

System audio: Excel displays a list of logical functions in the Select a Function box. Click If. Click OK. The Function Arguments dialog box opens with text boxes for entering function arguments. The insertion point is in the Logical Test text box, which will contain the argument that represents the condition the function will check for.

System audio: Type D5 greater than sign 100,000 in the logical test. The IF function will test for a value greater than 100,000 in cell D5. Press Tab.

System audio: The insertion point moves to the Value If True box.

System audio: Type Yes in the Value If True box.

Microphone: You're talking crazy, right? Hours already. I guess that must be days. 24 hours. Medium mode. And what is this?

System audio: If the value in cell D5 is greater than 100,000, the IF function will return a Yes value in cell E5. Excel automatically inserts quotation marks around text values, but the quotation marks won't appear in the value returned by the formula.

System audio: Press Tab. Type no. If the value in cell D5 is less than or equal to 100,000, the IF function will return a no value in cell E5. Click, click OK. Excel returns a result of yes.

Microphone: What's the meaning of the data?

Microphone: What's another name?

Microphone: Very good, right?

Microphone: Right, so average and mean, same thing, right? You gotta know that. What's the median? What's the median number?

Microphone: What's the median? It's the middle number, meaning if they're in order— well, it doesn't matter what order.

Microphone: If I have, if I have a bunch of numbers here,

Microphone: Right, what's, what's the median here?

Microphone: Well, it's the 55, right? So it might be like, say you have, uh, house pricing, houses, uh, housing prices. So I have $200K, right? $200,000, right?

Microphone: 225.

Microphone: I make up some numbers, $275,000, uh, then I have $300,000, and then I have like this $2 million home.

System audio: Use the IFERROR function in a data or lookup table to flag a formula error or invalid entry. Creating a customized error message helps users identify and fix problems more easily.

System audio: Click Save.

System audio: The cell currently contains a formula using the VLOOKUP function. You want to nest the VLOOKUP function inside an IFERROR statement, so Excel will display a customized message if the VLOOKUP function returns an error.

Microphone: Obviously, why would this guy do it? That house is so expensive.

System audio: In the formula bar, click directly after the equal sign to place the insertion point, and then type IFERROR, open parenthesis, in the formula bar.

Microphone: Well, that's like the number. What's the average here? I know it's going to be like $200,000, right?

System audio: The existing VLOOKUP function will be nested in the IFERROR function as the value function argument. As you type, Excel displays a screen tip and prompts for the function arguments.

System audio: In the formula bar, click to the right of the last parenthesis to place the insertion point at the end of the text, and then type comma quotation mark invalid health plan quotation mark close parenthesis in the formula bar.

Microphone: So $200 million.

Microphone: All right, so anyway, if I take the average, right, it's going to be very different than the median. What is the— where do I get the average? I'm going to go to my red pen. Double-click on it. What does that do? It brings it back. Or I do what? I can do Ctrl+F1. On my ribbon, um, okay.

Microphone: Where did I do this? On the formula tab?

Microphone: You can just watch or you can enter on the ribbon. I can just go to what, Home? I'm going to expand my, my window here so I get more detail on my ribbon, right? It's dynamic. What's this in the editing group? What's this symbol here? What is this symbol called? What is this symbol called? We're in Module 3 for the late people. We're in Module 3. Open that up. Thank you.

Microphone: Okay.

Microphone: So what is the symbol called? What do you call that symbol, guys?

Microphone: What is that? What is that symbol? What is that symbol?

Microphone: Sigma, right? Capital sigma, Greek letter S. S for sum, Greek letter S, capital S. All right, um, click on that and I have the sum that was already set up, the average. Okay. See what I did? I have the data here and I'm not selecting anything. I'm just going into J and I'm going up on, on Home and I'm going to go to the, um, editing group here and I'm going to click on the I'm going to click Average or hit the A or hit the A. See, it's on the line. And look what Excel did. What did it do? What did Excel do? It guessed correctly. It said, oh, you got data to the left, you must want to average it. I'm going to average that. That's kind of AI in there already. That's kind of like AI. All right, so that's my average. All right, well, what is the mode? What is the, um, that's the same as the mean, right? I'm going to delete that.

Microphone: Go back up to the dropdown here.

Microphone: And I'm going to pick more functions, more functions.

Microphone: And, um, I'm in Statistical. You might not be in there. I, I went there before. Remember Statistical? And I'm going to look for mode.

Microphone: So I got quiz, uh, LN, right? And ABCDEFG.

Microphone: And here's, uh, median. So median.

System audio: Use the VLOOKUP function to quickly find the value that corresponds to specified cell content. For example, find the premium associated with an employee's health plan, or the letter grade that corresponds to a student's numerical test score.

Microphone: What's median going to give me?

Microphone: Okay, so you came up with dialogue and picking those numbers.

Microphone: Uh, yes, correctly.

System audio: Type equals VLOOKUP, open parenthesis, B5, comma, E4:F7, comma, 2, close parenthesis in cell C5.

Microphone: If not, I just want to go here.

Microphone: I don't have a second range of numbers like somewhere else below there. I just say okay, and 274, yeah, that's the one in the middle, right?

System audio: The VLOOKUP function will find the premium that corresponds to the health plan in cell B5.

Microphone: And now I'm going to change that to drop down here. I had sigma, drop down, I'm going to go to more functions, and, um, it still remembered I was under, um, statistical, so it's still doing, uh, median.

Microphone: More functions. Let's go here.

Microphone: I don't want that low.

Microphone: It's a needle in a haystack here.

System audio: Using Goal Seek lets you determine the target value of a cell, called the set cell, such as the total annual costs, based on changes in another cell, called the changing cell, such as the annual premium.

Microphone: I can go up here.

Microphone: I can do the same thing here.

System audio: Click cell B.

Microphone: I'm not sure yet, so, um, I'm having a little difficulty here.

System audio: You will use Goal Seek to set a target value for cell B13, the total annual costs. Note that the cell currently contains a formula, a requirement when using the Goal Seek feature.

Microphone: Let me delete that first. I'm not sure yet, so, um, I'm having a little difficulty with the other things, but all of them, they were typical. So before I already had the, uh, the So we can pull that.

System audio: Click the Data tab.

System audio: In the Forecast group, click.

System audio: The What-If Analysis menu opens.

System audio: Click Goal Seek.

System audio: The Goal Seek dialog box opens. The first argument you will enter is the Set Cell, which is the cell for which you are setting a target value. Because cell B13 is selected in the worksheet, the default entry in the Set Cell text box is cell B13. You will accept this entry.

System audio: Click the To Value text box. Type 6000 in the text box. You must enter a value here. Your target is total annual costs of $6,000. Click cell B7. Goal Seek will calculate what the value in cell B7, the annual premium, must be in order to achieve a total annual cost of $6,000 in cell B13. Click— The Goal Seek Status dialog box appears. box opens stating that Goal Seek has found a solution. Excel returns the solution in the worksheet.

Microphone: I don't want the medium. Next I'll do the mode. What is the mode, guys? What is the mode?

Microphone: What is mode? What is the mode?

Microphone: What is mode? Any more motives?

Microphone: What is it? I have numbers too.

Microphone: More.

Microphone: Bye.

Microphone: What is the mode of these numbers? The mode is the one that you have the most of, right?

Microphone: Well, let's just say in the class, um, the, um, 80% of the students get a B.

Microphone: Right there, that's the mode. That's what most people got, right? Anything— the majority of numbers, the one you got the most. It might just be 10%, but that's the number that you have the most here. So right here, the mode is what?

Microphone: I would go mode equals mode.

Microphone: And I'm not using the— I'm not using the function box, I'm just typing mode and it tells me put in number 1, right? And then I see in square brackets— in square brackets I see number 2. Guys, what's that mean? You guys don't have your phones out, right?

Microphone: So mode, and then I see number, and then I see, um, number 1. What does that mean? It means I can just pick Well, anything with square brackets means what? It's optional. It might have a default value like 0 or something, but here I can put as many numbers as I want, so I'm going to pick all of these and I close So I close the parentheses and the mode is 4. That's because I have 1, 2, I have 3 4s, 2 2s. I'm going to change this to a 2, and now there's more 2s than 4s. So what, what's the mode? What is the mode? What is the mode of your data set, guys?

Microphone: It's a number that shows the most frequently. That's the mode. What's the median?

Microphone: Median's the same as what?

Microphone: What's the median?

Microphone: The median is the middle, correct? The middle number. The B is the median.

Microphone: Medium middle.

Microphone: Medium middle.

Microphone: And what's the mean? What's the mean?

Microphone: Mean is the same as, same as what did I do before? Average. Mean is the same as average.

Microphone: Median is in the middle.

Microphone: The middle number, right? And if you don't have an even number of numbers, you can just take the 2 numbers that would be in the middle, uh, because you have an even number of numbers. So what would that be if I have even I have an even amount of numbers, so I have 2, 3, 7, 9, 10.

Microphone: One more.

Microphone: So if I have an even number of numbers here, there is no middle number exactly, right?

Microphone: Everyone follow? So what, what, what is the median here?

Microphone: Is it the 7 or is it the 9? It's 8. Very good. Why is it— let me, let me, let me change it just to make it a bit different. I'm going to change this to, uh, 10. It's not by the app. Well, okay, so that now, um, because that was 7 and 9, but yeah, it is 8. So I'm going to do the median. Median, I'm not using the function because this is easier. Just type it in and I'll do the median. So if I have an even number of numbers, I can just drag it across and the median is 8.5. So it just takes the average between the 2 numbers. That would be, right, because there's no middle number. If I have a middle number, I will insert, I'll insert a row, I'll shift everything to the right. Just saying now, if I actually have an even number of numbers, right, it's actually this row.

Microphone: The median number is the middle number, but if there's no middle number because it's even, it takes the average of the 2 middle numbers.

Microphone: So that, that, that is your median. Median.

Microphone: Formula text. Remember formula text? It points to the formula cell and it tells me right there, that's my median. Everyone needs to know what median is.

Microphone: All right, so let me scroll back over.

Microphone: All right, so we just, we're just studying our data, right, getting the lay of the land. Next tab, next instruction, constants and units.

Microphone: You got to be careful about what your units are. Are you in thousands? Are you, um, using constants like here the day? So what is the day? What do you think that means, the day? You can name a variable, you name a cell, uh, day, and you could have the number of days in it.

Microphone: But I could go here, I could say like the number of days.

Microphone: I can say days, right? And, and I'll put a reference here to the days. I'll just say 55 days, right? And I can refer to this if I go to this name box over here. I'm in the cell and I go to the name box and I'm going to type in days and hit enter. And now when I click on this, it says days. Or if I'm down here and I say Days equals days, and if I say equals, uh,

Microphone: Well, I guess days, um, if I say equals days, and it actually— what it does, it actually points to that. I don't know, times 365 or times 2. actually just refer to it by its name. That's a constant. Alright, well, don't worry about it yet. We'll see that again later. Deciding where to put the constants.

Microphone: All right, so things like constants, uh, where to put that.

Microphone: Constant would be something like— a good example of a constant is just— you don't have to type this in. Let's just say I have some amounts here. So I have— I'll call it price.

Microphone: I have tax over here, and I have prices. Everyone follow me? So I have some prices. $1.99 is fine. I'll make that dollars. I'm going to make that dollars by hitting Ctrl+Shift+4. Making that dollars by Scroll down, just 200.

Microphone: $400, $200. Okay, so I have these prices here.

Microphone: I'm just doing Ctrl+Shift+4, man.

Microphone: So let's say the tax is 8%, what would that be? Equals what? That number times what? 0.08, correct? 0.08, 8%. Don't do that. If you have a con— you're multiplying, make the tax a constant. Tax rate, it's all by itself, and type in 8%.

Microphone: And usually 2 decimal places for percentages.

Microphone: Up.

Microphone: That's what we're doing, but the tax rate would be 2 decimal places. Now instead of pointing to saying 8%, what am I going to do?

Microphone: Point to the 8. So now if I change this to 9%, it adjusts.

Microphone: So never— don't put the 8% in there, point to a cell that has that in there.

Microphone: Now, everyone okay with this? What happens if I copy this formula down? What will it do?

Microphone: It's multiplying the 200, that's nice, it's multiplying the 400, but what's it doing?

Microphone: As I copy the formula down, it's now— it moved down 1. And what should happen?

Microphone: That's not good. Everyone follow? That's relative referencing. Everyone, very important. So what I need to do is tell Excel, please don't move off of this 5% over here, this tax rate. When I copy this formula down, yeah, go to P2028, that's nice, but no, no, don't go to Q25, please stay here. How do I tell Excel not to go to Q25? I want to move this formula here, not to move this cell reference here. What do I do?

Microphone: I make it absolute, so it's called absolute reference.

Microphone: Not the vodka, absolute, right? Absolute reference.

Microphone: And what I do is I put a dollar sign in front of, um, here in this case I want to be locked on 24. But always being 24, I hit the F4 key, F4 key. See what happens, guys?

Microphone: I get what?

Microphone: I get the dollar sign, and the dollar sign's anchor, anchor or lock, anchor or lock, same thing.

Microphone: Okay, we're following that.

Microphone: Oh, it always stays on 24. It doesn't, it doesn't adjust relative. I went down one, but it says no, no, no, Excel, don't move off that 24. Don't move off the 24. That's what the dollar means. So when I copy it down completely, uh, everyone see this fill handle? Everyone see this little black X here?

Microphone: And see the little black crosshair? If I drag that down, it's a fill handle.

Microphone: It fills it in. Everyone see that? All right.

Microphone: So that's absolute referencing. I locked the 9%. But the point was this is a constant.

Microphone: So don't type in the 8% or 9%.

Microphone: Makes it more obvious what that is, is the tax rate, right? Up in Q, in Q, in Q24. And if I change this to 10%, automatic.

Microphone: I want to understand the idea of not putting the 8% in the formula, actually put the tax rate in its own cell, right?

Microphone: So past this.

Microphone: We didn't get any instructions yet calculating time. Okay, here's some instructions.

Microphone: Uh, we should be— either one should be on the call center lock. Call center lock.

Microphone: Go over to I5. Everyone's in I5, and I want the, the, uh, the time on hold. Well, what's that?

Microphone: When was the call placed? 8:05, 5 seconds after 8 AM, and didn't get answered for— it was like 6 seconds, right?

Microphone: All right, so let's just take the difference between this 11, subtract the 8:05, and I should get what?

Microphone: 6 seconds, maybe. Let's see what happens. So equal sign, it's a formula. So it was answered at 8:11, 11 seconds after 8 AM, it's like 11 seconds minus when did they call? They started at 8:05 calling, and what do I get? Oh, that's weird. I did get 6 seconds after midnight, right? It looks like I need 6 seconds.

Microphone: All right, um.

Microphone: I'm going to change the format of this.

Microphone: This is formatted.

Microphone: And as a time.

Microphone: We go up to the Home ribbon.

Microphone: I'm going to expand myself.

Microphone: It's more of a rhythm. It's more of a rhythm.

Microphone: I'm on hold.

Microphone: And under here, under Number, under Number, Number Group, Number Group, instead of Custom, pick General Number. General Number, that'll take— it'll take text for input. If it looks like a number, it'll make it number. All right, so I'm going to pick that. Oh, I got something there. What did I get?

Microphone: What is that, guys?

Microphone: What is that?

Microphone: What happened? I just changed the formatting, so it didn't really change the formula. It's still G5 minus F5, right? Still G5 minus F5, but I had the formatting What does that E mean? What does that mean, E?

Microphone: What does E mean?

Microphone: Doesn't mean extra.

Microphone: How's the Giants for you today?

Microphone: Okay.

Microphone: What does the E mean?

Microphone: What does the E mean, guys?

Microphone: Since college, have to know what that means. We're not going to use it too much. For very large numbers or very small numbers, e for exponents, like, like, like 2 to the 3 or 10 to the 2, right? That's an exponent. So it does mean like multiply by the factors of 10. So it means move the decimal place factors of 10, but by what?

Microphone: Negative, so that means I actually would move the zeros out in front. So I'd actually move it over 1 and then have 4 leading zeros. So it's a very small number.

Microphone: That's what it's saying, the e, e to a negative number. So generally if you do that, maybe you've done some more multiplication. If you're doing like, you know, this way you work, I do like, you know, business financial modeling, you're probably not going to get very, very Small numbers unless you made an error with something, or very, very large numbers.

Microphone: Okay, so that means exponent.

Microphone: But that's the same as— let's just convert that to general number. And so I'm on this number, there's not general, I'll convert to a number. So I can do that on the Home ribbon, on the Home tab.

Microphone: And then in the number group again, I'm going to convert that. I'm going to say number, number. Oh, look at that. What do you mean 00? Again, that's, that's just the formatting. The number Under there has more decimal places, right? We saw it at 6 point— it was actually e to the negative 5, so it was 0, 0, 0, 0, right? 6.00069 something.

Microphone: How do I get more decimal places? How do I get more decimal places?

Microphone: Go where?

Microphone: Home. I'm gonna go to Home a lot, then go left back to Numbers. What's this?

Microphone: Increase, increase decimals.

Microphone: I'll keep increasing my decimals. Oh, 1. No, it's a 7. No, it's a 69. No, it's a— that's the same number as before, but not with the scientific notation, which just said 6.9. So I'm gonna go to Home, then go left back to Numbers. What's this? Increase decimals.

Microphone: It's actually taking like the time of the day, part of a day, because this is like a time and it's the same day.

Microphone: It's actually a fraction of a day, okay? Yes.

Microphone: All right, but this doesn't look right. It's not like 1/10, 1/100, 1/1,000. It's not like 1 whatever that is, 1/100th of a second. It should be 6 seconds. All right, let's work on that.

Microphone: Does everyone have this number here?

Microphone: I just have the same formula, G5, when it was answered at 11 seconds after, and your call was placed at 5 seconds.

Microphone: 11, this 11-second minus the G minus the F5, and I end up with this really tiny number here.

Microphone: Okay.

Microphone: Let's actually— we have to— it's a fraction of a day, so what I need to do actually is multiply it by 24 hours. And how many minutes in an hour? 60. And how many seconds in a minute? 60. So this is going to actually convert this fraction of a day into seconds.

Microphone: All right, so I gotta put parentheses around it first of all.

Microphone: I don't just want to multiply.

Microphone: So F5 by 24, I want the difference, which is that 0.000069444 or whatever, 24 hours times 60 minutes times 60 seconds, and let's see what this gives us.

Microphone: Oh, that looks good.

Microphone: 6 seconds, right? This is in what column? Says what? Seconds. So that, that looks correct, right? So if you were doing this data, you would say, well, I need seconds, right? And I know I can look at it, there is seconds. But I gotta tell Excel how to do it. It sees 2 dates, 2 times, and it just makes my answer as a time, which is wrong. Convert it to just a general, uh, convert it to a number and then multiply it by 2466. Do I need all those decimals? I don't need any.

Microphone: So I can click on what? Home?

Microphone: Guys, who's been following me?

Microphone: Call me what?

Microphone: Numbers. I can expand my Excel here. Window, expand the window.

Microphone: Numbers, and then under numbers here, what's that? Increase decimals.

Microphone: And decrease decimal. So I want to decrease this count, right?

Microphone: Keep decreasing. I just need 6. Does everyone have 6 seconds in there? Everyone have 6 seconds? Now I, I want to copy it down, and I know what I go down to row what, 333, right? Hey, everyone see the fill handle here? Everyone see the fill handle? If I click on this black cross, what happened? I can drag it down, right? I'll let go of it right here. And what did I do? Looks correct, right? Everything was, um, relative addressing, so it adjusted everything, right?

Microphone: The only problem is what?

Microphone: Oh, it also brought over the fill, the formatting. I, I wanted this to stay white. I don't want to shade it. I'm going to do Ctrl+Z. I'm going to do Ctrl+Z.

Microphone: All right.

Microphone: Now, other thing is I don't want to drag this down. Everyone follow me? I don't want to drag this down how many rows?

Microphone: How many rows am I dragging that down?

Microphone: I got it back down to row 333 if I remember correctly, right? But there's a shortcut for that, right? What is, what is the, what is the shortcut for that? What do you think? What do you— we got the shortcut? No. Okay.

Microphone: Anybody? What's up? Anyone know the shortcut? So instead of dragging that down, clicking on this guy here, guy online, right? Clicking on that dot and dragging it down, I can double-click that. Let me show you what I mean by double-clicking. Double-click this.

Microphone: Right here, see where I am? I double-click it.

Microphone: Look what it did.

Microphone: Well, it filled everything in, but it did— oh no, but it filled it in with what?

Microphone: Ah, but it also brought the formatting, which was shaded.

Microphone: Okay, okay.

Microphone: Just a little quick access.

Microphone: Box here.

Microphone: Everybody see this little box here?

Microphone: Don't click off it, otherwise it'll go away, but I can— I have some options.

Microphone: And my option is, okay, do that filling, but don't bring that formatting over. No, no, no, I don't want you to get rid of my bands that I got formatted, you know, no formatting, shading, no shading, shading, right? So fill with what? Without formatting. Everyone did that one? Oh, that looks so aesthetic. I'll click off it. Oh look, and he did it all the way out to the end. The end is what? Row 333.

Microphone: Everyone have that?

Microphone: Let me do it again. Ctrl+Z.

Microphone: So what do I do with the fill handle? As long as you have data to the left or to the right, it'll keep going.

Microphone: So I get the fill handle, double-click it.

Microphone: That's nice.

Microphone: But I don't want to, I don't want to overwrite, I don't want to shade every line. I want to keep it like these, these, uh, bars here, like, you know, filled, shaded, not shaded. Yes. And, um, so click on this quick right here, and I get some options when I hit the arrow and say get rid of that formatting. Please fill without the formatting.

Microphone: Okay.

Microphone: And now it went all the way down to 333. Does anybody know how I jumped really fast to the bottom?

Microphone: How do I get to the end of the data?

Microphone: Granola.

Microphone: Control N. Well, that will work too. Yes, that's a good answer. Another way is, um, just for this particular row, but that, that'll actually kind of sit through. Control down arrow. Control down arrow. Just in this column, you go to the end. Of the data, where the data stops. See where it stops? In what? 333.

Microphone: Everybody good?

Microphone: Control arrow up does what? Control arrow up brings me to the very top.

Microphone: As long as I have data, like if I go down here and have more data, I'm just making something up, I have more data below this, right? If I do, um, let me do it again, Control arrow down, it just brings me to the first place the data stops.

Microphone: Not, not the same as Control N, but in this case it kind of was almost the same thing. Control N would have brought me to— Control N, it brought me out above column N because there's something up above it. So somewhere there's something in there, and now I brought data all the way down to 338, which I don't need.

Microphone: So I'll just hit the Delete key, arrow down, delete. Everyone has that number filled in?

Microphone: Yes.

Microphone: Shake your head, maybe?

Microphone: Very good, well focused.

Microphone: Hey.

Microphone: Next, next command is

Microphone: Um, so we did all that. Next.

Microphone: Auto filling. I just did auto fill. Oh, patterns. So the patterns on auto fill, um, there's a fill handle. Well, we just used that fill handle. That's that little black cross. That's the fill handle. Right, so we want to go to, um, I5. I did that. Let me— I actually did that already. I5.

Microphone: I5, and they tell you to drag it down, right?

Microphone: And hold it down.

Microphone: Instead of holding down, you know, just double-click. Everyone got that? So we just double-click instead of clicking on it and dragging it back. I don't have to do that. I can just double-click that. I know that technique.

Microphone: Explore the options. I did that, right? But after I dragged it down, I did get this little option over here, and I said what? Go without formatting. So I did that already.

Microphone: Next instruction.

Microphone: Fill series. Okay, we kind of did that. We'll skip this one here.

Microphone: Oh, um, okay, um, there's patterns that are built into Excel. There is ways to actually add your own patterns, but what do I mean by this?

Microphone: Everybody insert a blank sheet. Everybody insert a blank sheet to the— to your workbook.

Microphone: Everybody insert a blank sheet to your workbook. How do you do that?

Microphone: How do you insert a blank worksheet? Yes.

Microphone: Click on the plus. Thank you. Right, the plus down here. Very good. Click on the plus and it says new sheet. That'll work. Click on the new sheet. All right, on the new sheet, um, I'm in A1. Okay, I'm going to go to B2. I'm going to B2, type in Jack.

Microphone: Okay.

Microphone: Anyone typed in Jack on your new sheet? Is anybody not caught up?

Microphone: Okay guys.

Microphone: All right, now please, now drag that over. And what is it? What does it give me? It tells me, oh, that's going to be February. January. Everybody good? Let go of it somewhere. And I got what? I got the months, right? How about if I put in, um, Tuesday? How about I just put in, um, Tuesday? Oh look, it didn't give me Wed. Oh, pretty cool, right?

Microphone: The whole word, right? And that— okay, that's cool.

Microphone: How about if I go 1, 2, 3? Select 1, 2, 3, and 1, 2— everyone following me? You guys watching? 1, 2, 3, and then I drag. What do you think it's going to give me?

Microphone: 4, 5, it should use the pattern, right?

Microphone: But if I do, uh, 2, 4— oops, I've got 4, 4, uh, well, maybe equal 2 times, we'll figure that out.

Microphone: There you go.

Microphone: 6, 8, 10, it counts by 2. Okay, I'm doing my data. I had quarter 1. Well, it's quarter 1, all right? Uh, how about if I drag quarter 1 over? What do you think's gonna happen?

Microphone: You'll think of water too, right?

Microphone: Yeah.

Microphone: You'll do cycle proof.

Microphone: Same thing, I can start at Q3, Q3, F3, doesn't care.

Microphone: Q4, and cycle through.

Microphone: Okay, so those are some built-in patterns that are very useful.

Microphone: Okay, so that was on your blank sheet.

Microphone: All right, let me do attendance, um, and you guys, this is our attendance and our break after you see your name on attendance. Let me do attendance, please. All right guys, don't play on your phone. Take a break here. Uh, I'm gonna do attendance.

Microphone: All right, did you guys see your name up here? Just say here. Yes, here. Thank you.

Microphone: Say here if you're here. Angelina, here.

Microphone: Uh, here. Gordon's here.

Microphone: Julia, Julia, Ryan, here. Thank you. James, here.

Microphone: Emily here.

Microphone: No one?

Microphone: You are?

Microphone: Here.

Microphone: Thank you.

Microphone: Here. Thank you. Here.

Microphone: Here.

Microphone: Benjamin, Benjamin.

Microphone: Here.

Microphone: Here.

Microphone: James online. Louis is here with Louis.

Microphone: Sophia.

Microphone: Daniel.

Microphone: Daniel. Daniel. Daniel.

Microphone: Jonathan. Jonathan.

Microphone: Thank you.

Microphone: Uh, he's here.

Microphone: Here.

Microphone: Emily here.

Microphone: Here.

Microphone: Thank you.

Microphone: Here. Thank you. Here.

Microphone: Here.

Microphone: Yeah.

Microphone: Anything?

Microphone: Here.

Microphone: So take your 3-minute break, uh, rest your brain. You're really not resting your brain if you're on your iPhone, on your phone.

Microphone: Take a walk, stretch.

Microphone: Decompress your mind there.

Microphone: Unfortunately.

Microphone: Roll back.

Microphone: So extending the series, so we kind of did that there.

Microphone: Let's go into— now we're back on, we're back on our, um,

Microphone: Wolf Center log.

Microphone: And I'm gonna— I want to copy in, um,

Microphone: In E5, in E5, everyone's on the call center log, everyone, call center log, and type this number in. I'm going to copy it here so it still works, right, in Windows, and I'll do Ctrl+C, Ctrl+C.

Microphone: Right-click on it, right, Ctrl+C to copy it. And now I can't hit Enter, but I can paste it. And I want to paste it where? E5, E5. So let me go over to E5, make my window a little bigger. I can drag this little bar down here if I want.

Microphone: Find the one for that.

Microphone: All right, um.

Microphone: All right, let me delete this.

Microphone: You should have— you have no date in there, right? I didn't get— did I do that one already?

Microphone: Okay, I must have opened up the wrong one. Oh, I opened up the one from my previous class instead of the new one. Okay, so in here, in here, um, type— paste that number in, Ctrl+V, right? Ctrl+V. I already typed it in. Now look what happened, look what happened. It overwrote the formatting, but I get— I still get this little prompt here. Everyone see a little prompt here? And now pick the second option, which is what? Match the destination formatting, which means don't change what was there. Don't change what was there.

Microphone: Everybody have that in there?

Microphone: All right.

Microphone: Now, um, how do I copy it down? Do I have to click and drag? What's the shortcut, guys? What's the shortcut? So to click and drag it, what can I do? I got the fill handle in the corner, right? Got the fill handle. Let me just click off that for one second.

Microphone: Just get rid of that. Okay.

Microphone: In the fill handle.

Microphone: What do I do? Do I— should I drag it down to 300, row 333? What should I do?

Microphone: What's the shortcut that we— guys, what's the shortcut?

Microphone: You guys asleep?

Microphone: Hello?

Microphone: What do we do?

Microphone: Double-click it. Everyone see that? I'm double-clicking it. What happened? Voilà!

Microphone: And notice this, the Quick Access dropdown here on the last row as I scroll down, still there. But this right here, what does this do? Click on that. What does it do? What does that do? Oh, I can do Fill Without Format. I don't want to get rid of my, my bars there, right? My fill and no fill, fill and no fill, right? So I click on fill without formatting. All that took off it. That looks good. Everyone good? So each Even though I had this C29 garbage, right, whatever, it went 1, 2, 3. It added numbers.

Microphone: Phil figured it out.

Microphone: Everyone feel okay with that? So pretty cool, I got all the ID numbers in. Okay.

Microphone: I'll go to the next instruction.

Microphone: Um, we got our last instruction here.

Microphone: Um, yeah, just calling about— did I do that already?

Microphone: Yeah, I think I did that already.

Microphone: Exploring cell references. So cell references, that's the absolute references. Let's see, G5, what's the references?

Microphone: So that's my— this number over here.

Microphone: Did we just do this number here?

Microphone: Yeah, that's what I did like a second ago.

Microphone: Uh, does everyone have this filled in for the seconds?

Microphone: All right, because I, I accidentally have the wrong sheet from where I got from my previous lesson.

Microphone: Yeah.

Microphone: Um, so BAA2 for the formulas, formulas, we did that. So, okay.

Microphone: Absolute references.

Microphone: Uh, absolute references. I just covered that, didn't I? Absolute references. What's absolute reference, guys? The tax rate, remember on sheet 1, right? Absolute references. We did a lot of work on that. Absolute references. Absolute versus relative. Relative means you just, you didn't anchor anything. You just, when you copy, everything's going to adjust, right? If you copy a formula down one, all the references are going to move down one row.

Microphone: What is mixed references?

Microphone: All right everyone, let's open the second worksheet. Remember we downloaded 2. Open the second one. Everyone open the second one. And so I'm gonna, uh, maybe go to the right place.

Microphone: Right here, if I drop them.

Microphone: And I want to open up the second one.

Microphone: I don't have a warrant on that.

Microphone: So open up your number 2, uh, open up the one that says 2i, right?

Microphone: I'm going to open up mine that has the 1 in here because it's the second time I downloaded this file. This is the one I want.

Microphone: Right, you want the, you want the NP example, uh, 3-2, right? Go for that one.

Microphone: I opened up on my other window and just dragged it over for the online people.

Microphone: Let's go to mixed references.

Microphone: Everyone click on the mixed references there. Is anyone not caught up?

Microphone: I need a second. We're good. Okay, in the mixed references, I want you to do multiplication, right? Like, what's 1 times 1? 1, right? 1 times 2, right? And 1 times 3, right? 2 times 1. I want you to write one formula.

Microphone: And then you can drag it across, copy it across, and then copy it down. But one formula in A, but I have to use mixed references.

Microphone: So I need one formula. Guys, how— can someone tell me how to write one formula? If I do this, everyone looking up, if I say— well, I gotta edit my formula. I click on edit, edit, enable editing.

Microphone: I can move it out my other screen. Let me move it over.

Microphone: I want one formula, so I don't want to say equals.

Microphone: A1, okay, A5 times that, right?

Microphone: Now, if I copy this over, what will happen?

Microphone: Shift right arrow, shift right arrow.

Microphone: Anyone follow me?

Microphone: Does anyone know the shortcut now to copy it over?

Microphone: I think Control R.

Microphone: I'll do that again.

Microphone: Control C, Control V.

Microphone: If you have the formula in your cell and I do Shift right arrow, Shift right arrow, everyone did that?

Microphone: Then hit Control R, as in Control Right, what happened?

Microphone: What happened?

Microphone: Oh, copy everything to the right. It don't look correct though, does it?

Microphone: Because what happened?

Microphone: Oh.

Microphone: It moved along as I moved.

Microphone: It used to say A5, that was correct, right? A5. But now this says what? B5. That's not right. What does this one say? C5. It keeps moving it, right? Because I relatively moved to the right. What do I need to angle, guys? What do I need to always be in? I always need this number to be where? In what row?

Microphone: Not B5, not C5. What?

Microphone: This number's always in A, right?

Microphone: So what, what do I put the dollar sign on?

Microphone: Not a trick question.

Microphone: So when I copy it into C, it doesn't now say B5, it'll still say A5. Everyone good? Put a dollar in front of only the A.

Microphone: Not the 5, not the 5, because when I copy it down, it should say— it should say A6, A7, A8, right? So don't put a dollar— $5 in front of the 5. Only anchor or lock the column A. I'm locking the column A. Let's see how that works. So if I copy it over,

Microphone: I can do the fill handle, or I can do what I did before, Shift right arrow.

Microphone: Shift right arrow, Ctrl+R.

Microphone: What did I not do?

Microphone: I didn't copy over.

Microphone: Ctrl+R.

Microphone: Oh, I didn't hit Enter. Sorry, I lost— excuse me, I lost my dollar sign.

Microphone: Always enter, enter the A. I can do F4 or type the dollar sign in or hit F4. That looks good. I hit Tab. I got the A in there. I got the anchor around the A, so it's not going to say B when I copy it to the right.

Microphone: Copy. I'm using the fill handle.

Microphone: That looks good.

Microphone: Right?

Microphone: Well, what everyone— now what's going to happen to B4 when I copy this down? What's the B4 going to be when I copy it down, guys? What's the B4 going to be?

Microphone: If I copy down one down, what's, what's going to happen to the 4? I'll drag it down one, right?

Microphone: 4 became— it's pointing to the 1, but it's this one in B5 copied down again.

Microphone: Now what is it?

Microphone: It's B6. I always need it to be 1 in what row, guys? What row does it always have to be in?

Microphone: It should lock the 4 because these numbers are always where? They're not always in B4, but they're always in 4, right? Right? So what should I lock? Row 4. Lock row 4. For the dollar sign, either you can type it in or you can hit that F4. Everyone good?

Microphone: Now I'm going to copy that formula down.

Microphone: And I could, I could use that. That looks like it works.

Microphone: Yeah, right, it's always pointing to the 4. And now if I drag it to the right,

Microphone: Yeah, it, it looks good.

Microphone: So

Microphone: Put one formula in A1. Everyone good in A1? So, um, it looks good. I got the, the A lock to always use these numbers, and I got the 4 lock for the Uh, multiplication over here because I always want to be in row 4, not always in B, sometimes I want to be in C, right, and D. So just lock the 4. So then I would copy that over and then I can copy it down.

Microphone: And if I got 50/50, I got 50 in the corner, I probably, I'm probably good, right? Everything's copacetic there. Did anyone not get 50 there?

Microphone: We're all caught up, right? Okay, I'm going to go to the next tab. Dynamic arrays. What's that? That's kind of pretty cool stuff. Dynamic arrays.

Microphone: All right.

Microphone: So this cool feature, dynamic arrays, is going to do some magic. Everybody is on dynamic array tab?

Microphone: Anybody not on dynamic array tab? Anyone playing on their phone?

Microphone: Okay.

Microphone: A1, I'm going to do— what do they want to copy? A5, because America's capital, A5 down to where?

Microphone: The 814. I'm just going to type this in. This seems a little weird.

Microphone: That's the range, A14. Doesn't matter if there's gaps, right?

Microphone: Uh, A14, A5, I've got caps lock on.

Microphone: And we're going to multiply that range— that's a range.

Microphone: Oh, and I need the equal sign, right? I'm doing a formula. I'm doing a formula. Let me do it again. Equal sign, A5 is where I'm going to start, and I'm going to go down to A5, A14. That's the last number there. That's the 10. And we're going to multiply that by not one— not, not just the B1, but I'm going to say, um, B4. I'm going to say B4 and out to F4. And we'll see what I did. I'm using like an array.

Microphone: I'm not saying A5 times B4 like before.

Microphone: Previously.

Microphone: A5 times B4. No, I'm saying do this whole array and then multiply it by this array.

Microphone: What's it going to do?

Microphone: I'm gonna hit enter.

Microphone: Whoa, it did this automatic fill series. It filled everything.

Microphone: Right, um, it's filled— it's filtered into, right, um, as long as it matched up out to A5, right, out to A4. Anyone see what happened? Who, who didn't get it? Who didn't get it? Who did get it?

Microphone: Who's like not listening to me?

Microphone: Who is listening to me?

Microphone: Almost everybody.

Microphone: All right, everyone see that dynamic array?

Microphone: Go, go over to, um, G6, uh, G4, G4. No, no, um, sorry, excuse me. Go, go into row 4, E, going to E. How do you add a— how do you insert a column into E? How do you insert a column? You remember that? I couldn't right-click and say what, insert? Well, how can I do it without the mouse?

Microphone: Well, I click on E and I do Ctrl+Plus, right?

Microphone: Everybody inserted the column of B.

Microphone: Everyone do that?

Microphone: You can right-click if you want on, on I and say Insert also. I, I inserted 2. Everyone see what I did?

Microphone: Does everyone have the inserted column?

Microphone: I put it in E. Everybody good? And now in E, uh, type in 3.5 just for fun. Everyone see what I did? 3.5. Everyone good? And hit enter. What happened there? Pretty dynamic, guys. Why are you looking at your phones?

Microphone: Did everyone have a 3.5 in there?

Microphone: All right, all right, I'll take your names now. We're gonna have 3, 5. Come on, guys, focus, focus. Everyone see how the dynamic array works? As you add to it, it's just gonna automatically fill it out as long as you put it in. If I put it at the end, it's not going to work.

Microphone: But if I insert another— I'll insert— I'll go here and I'll insert— I'll do it with the mouse.

Microphone: C and D, I right-click.

Microphone: I'm going to insert, and I'll just make up other numbers. Doesn't really matter what numbers I create.

Microphone: 15, whatever.

Microphone: Everyone good? I don't even need, um, any sort of absolute referencing there.

Microphone: All right, so let me go back.

Microphone: So all I did was, right, I just changed it to say, well, I'm going to be multiplying everything from A5 to A14, and I'm going to multiply that by everything from B A B4 after G4, and, and I don't have to copy it over, right?

Microphone: Um, now everyone go into, um, cell, um, D8. Everyone's in D8. Delete D8.

Microphone: Let me delete.

Microphone: Got it. Can't believe anything. Believe it. Watch what happens.

Microphone: What did he do?

Microphone: Right.

Microphone: I don't need those.

Microphone: Um, I inserted a row here. I didn't put a number in. Let me try and change the numbers in there. Oh, now what happened? Oh my gosh.

Microphone: If you have data, you try to put data in there, it freaks out because it's supposed to automatically fill everything.

Microphone: Everybody please delete everything in there. Delete, delete.

Microphone: I mean, actually go into— just go into

Microphone: Go into B5, into B5, and delete B5. You see what happened?

Microphone: It deleted everything.

Microphone: Everyone follow me?

Microphone: So if you just delete B5, now go down into— I don't care, go to C8 and type something in.

Microphone: Go back up.

Microphone: Everyone have that in there? Everyone have— looks like my screen.

Microphone: I deleted it. All I have is 100 in one of the cells in there. It doesn't matter which one. Okay.

Microphone: And now I'm going to try and do the same thing. Equals what? A5 through the range down to A14, and I'm going to multiply that by everything in starting in B4. Colon to G4. What happens when you hit Enter? What happens when you hit Enter? You got a spill error. It says you already got data somewhere. So I'm going to delete it.

Microphone: Did you guys follow that? So the— this dynamic array thing is going to fill, but if I have some data, it's saying, whoa, Rich, can't— that's just— I can't spill the formula everywhere. I have a spill error. Everyone see the spill error? So dynamic arrays, um, will give you that if you have some data in the way.

Microphone: And, and I'm going to get rid of this row here because I don't need 3, 5. So I'll click on— I'm getting rid of this extra row I put in.

Microphone: I'm going to delete it.

Microphone: Or I can hit Ctrl+minus. I'm going to hit Ctrl+minus.

Microphone: And everything adjusted.

Microphone: So everyone should have this formula in dynamic array. Is everybody good?

Microphone: All right.

Microphone: Uh, let's see where we're at.

Microphone: No questions here.

Microphone: What's my instruction page?

Microphone: So I did this.

Microphone: We did that one already. That was a regular 6 references, not 7 and a half arrays.

Microphone: It's references.

Microphone: That's where it'd be accurate.

Microphone: Modification makes references.

Microphone: Now am I, um,

Microphone: I was not here close.

Microphone: Oh, how do you show the formula?

Microphone: Let me show the formulas.

Microphone: Show formula button. Where's the show formula button?

Microphone: So what is, um, the formula? What is your formula?

Microphone: The shortcut to do that is hit the Control and the tilde key. Where's the tilde key, guys? It's next to the 1. It's to the left of the 1. It's really the asterisk. The accent key, but the tilde is that squiggly guy above it. So I'm really hitting Control and the tilde. It's a number to the left of a 1. And I do that, what do you get? Everyone see what happens when I hit the tilde? Control tilde, or control— I guess that's an accent mark. Does everyone understand what key I'm talking about? Number 1 on your numbers on the keyboard, above the Tab key on my keyboard.

Microphone: And it actually shows you the formulas and everything.

Microphone: Okay.

Microphone: Otherwise, you go to Formula, and then over here it says Show Formula. Everyone see it? Show Formula, what it does. Everyone got that? Okay, let's go back. I'll unshow the formulas, go back to showing the data, right?

Microphone: Let's go to the next instruction.

Microphone: Show formula is very lovely.

Microphone: It would save your workbook.

Microphone: Save it so I can do what? Click on this icon here, or I can hit Ctrl+S.

Microphone: So you have to submit 2 Excel files. So do you name them the same? No, no, I think it tells you the instructions. Where's the instructions on there? My instructions were— where'd they go?

Microphone: My instructions there is here.

Microphone: It only says one expected file. Okay, then, uh, that— then you're correct. Then I only submit one? Yeah, you're gonna submit the big one. Yeah, so that was like an intermediate, uh, interaction there, but we're probably gonna Apply it later to the other one. Okay, so, um, all right, we'll stop here then. So you can submit the file or not. It's not due until Wednesday. We're going to finish it on Wednesday, right? But you got to do the exercise tonight. That's a simulation. Everyone knows what to do, right? It tells you step by step what to do. So that's actually— yeah, right.

Microphone: Second,

Microphone: Lord,

Microphone: Going down.

Microphone: Hi.

Microphone: I mean, he looked good in there. He did look good in there.

Microphone: Okay, I got you, honey.

Microphone: Because a lot of them are.

Microphone: He still has it. And Ava said— he sent a photo to Ava on my Apple Watch phone.

Microphone: He still has it.

Microphone: Oh, you said message. Yeah, I'm dumb.

Microphone: You've got one.

Microphone: I'm gonna go to my bed.

Microphone: Yeah, Mike just used it. Where are you going?

Microphone: I'm gonna go to my bed.

Microphone: I'm gonna go to my bed.

Microphone: This thing is crumpled.

Microphone: Grab a folder off.

Microphone: What?

Microphone: I'm just gonna say goodbye.

Microphone: My roommate was sick.

Microphone: And I went home for the weekend.

Microphone: Nothing.

Microphone: Yes.

Microphone: We need to sign up. We need to go for these freaking colloquiums. So dumb. So dumb.

Microphone: Why is this girl— why is this little key so oppy, bro?

Microphone: He was like, just go to 2 events. I was like, okay.

Microphone: I think I have to like write about them too.

Microphone: Wait, so what are— what event are they? A speaker comes in? Yeah, yeah, it's literally just a speaker event. What do they talk about?

Microphone: Whatever the thing's about.

Microphone: different.

Microphone: How do they know what they want?

Microphone: Because you have to write about it.

Microphone: I guess so.

Microphone: And also the chapter 2 summary paper, did I already give that to you?

Microphone: Counting that as a bonus point. I'm gonna fucking kill myself. If I can't anymore, I'm gonna off myself. This is genuinely butt. This is literally butt.

Microphone: Yeah, I heard you.

Microphone: Take these AI flowers, pack it up.

Microphone: One please.

Microphone: Let's see what else.

Microphone: Start a class.

Microphone: Please put your phones away.

Microphone: For the next 75 minutes.

Microphone: Bye-bye.

Microphone: So several things to remind you. First, I released the first homework.

Microphone: In that assignment folder.

Microphone: So the first chapter is thinking straightforwardly.
