Clase CSS con corchetes?...aplica corchetes cuando la prop coincide. La cosa es que coincide si la paso como strin, 
rollo 'true'...y rula igual con .ay[data=true] y .ay[data='true']
<div className="switch" data-isOn={useStateBooleanValue} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>

    .ay{
    background-color: bisque;
    }
    .ay[data=true]{
        background-color: red;
        width: 50%;
    }
