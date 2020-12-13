"use strict";

const SensorPlaceholder = () => (
  <ContentLoader.default viewBox="0 0 560 100">
    {/* Only SVG shapes */}    
    <rect x="0" y="0" rx="5" ry="5" width="70" height="100" />
  </ContentLoader.default >
)

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

function deepEqual(object1, object2) {
  function isObject(object) {
    return (object != null) && (typeof object === 'object');
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

class SensorManager extends React.Component {
  state = {
    error: null,
    isLoading: true,
    data: []
  };

  update() {
    fetch("http://localhost:5000/data/fast")
    .then(response => response.json())
    .then(res => this.setState({ isLoading: false,  data: res}))
    .catch(error => this.setState({ error, isLoading: false }));
    // var currentdate = new Date(); 
    // var datetime = currentdate.getMinutes() + ":" 
    //                 + currentdate.getSeconds() + "."
    //                 + currentdate.getMilliseconds();
    // console.log(datetime);
  }

  componentDidMount() {
    this.update(); // Call first time (time 0)
    this.interval = setInterval(() => this.update(), 500);
    this.setState({ isLoading: true });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // // Use deep equal comparison to check if it's necessary to re-render the obj
  // shouldComponentUpdate(nextProps, nextState){
  //   if(!deepEqual(this.state, nextState)){return true;}
  //   //if(!deepEqual(this.props, nextProps)){return true;}
  //   return false;
  // }

  render() {
    
    const {error, isLoading, data} = this.state;

    if (isLoading) {
      return ( <SensorPlaceholder /> );
    } else if (error) {
      return (<div>Error: {error.message}</div> );
    }

    var rend = [];
    if(Object.keys(data).length != 0 ){ // if data (dictionary) is not empty
      for (var sensor in data) {
        rend.push(
          <Sensor name={data[sensor]["name"]} data={data[sensor]["data"]} />
        );
      }
    } else {
      rend.push("No sensors found");
    }

    return(<React.Fragment> {rend} </React.Fragment> );
  }
}

class Sensor extends React.Component {

  render() {
    const {name, data} = this.props;

    var sensor_rows = [];
    for (var arg in data) {
      sensor_rows.push(
        <tr>
          <td>{arg}</td>
          <td>{data[arg]}</td>
        </tr>
      );
    }
    return ( 
      <fieldset>
        <legend>{name}</legend>
        <table>
          {sensor_rows}
        </table>
      </fieldset>
    );
  }
}
