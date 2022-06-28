const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (      
  <p>
    {props.part} {props.exercises}
  </p>);
};

const Content = (props) => {
  
  let sd = []
  // props.parts.forEach(part => sd.push( part.name))
  props.parts.forEach(part => sd.push(<Part key = {props.parts.indexOf(part)} part = {part.name} exercises = {part.exercises}/>))
  
  return(
    sd
  )
};

const Footer = (props) => {
  let exCount = 0;
  props.parts.forEach(part=> exCount +=part.exercises)
  return <p>Number of exercises {exCount}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts = {course.parts} />
      <Footer parts = {course.parts} />
    </div>
  );
};

export default App;
