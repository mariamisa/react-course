# react-course
the benefit of react :
write single line of code, 
html display the text on the webpages
css the style
js alow you to make actions and interactively

* how website work for many years
user clink / make interaction the server response with new html file ,user make another request the sever will response to front end with new html page
this is problem single page appearing 

* why react?(let me handel the dom)
1. we don't change the dom directory (js manipulate the dom el the dom api allow us to make any change (delete,create,change)),react make blueprint for webpage but we have events so we want state then react know what should change 


## react concepts
1. declarative instead telling the app we simply give it state
  don't touch or edit the dom directory
 react do this for you by make blueprint website and data for describe website(state) if state change and its know what should change for you .
2. reusable component that make the website,
 as lego blocks(blueprints,material ui,bootstrap-react)
3.  component is js function
 that accept prop (attribute) (as function || as class) its contain html file inside js witch called jsx.

    ``` component architecture: we can have data about our application ,and we built these react components together = app  (reuse and share components) ```

4. Unidirectional data flow(احادي الاتجاه)
 think of react thats is a function accept state and components,its going to create virtual dom (js version of the dom) its give the react blueprint of how should it update the actual dom . the mean of unidirectional data flow any time we want dom to change website ,we have to change the state,if change state the react combine state and component we has and update the dom.(data can move down on one direction),its easy to debug the code


5. React is UI library (view)
  core react library
  rect dom library : that interact with dom
