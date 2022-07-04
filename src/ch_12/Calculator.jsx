import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BollingVerdict(props) {
   if (props.celsius >  100) {
       return <p>물이 끓습니다.</p>;
   } 
   return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BollingVerdict celsius={parseFloat((celsius))} />
        </div>
    );
}

export default Calculator;

/*

· Shared state
    - 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

· state 끌어올리기
    - 하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려서 공유하는 방식

*/