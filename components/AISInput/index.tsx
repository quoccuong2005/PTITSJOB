import styled from "styled-components";
import { useState } from "react";

interface IProps {
  placeholder?: string;
  icon?: JSX.Element;
  onEnter?: (value: string) => void;
  style?: React.CSSProperties;
}

const AISInput = (props: IProps) => {
  const { placeholder, icon, onEnter } = props;
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter(value);
    }
  };

  return (
    <InputWrapper>
      <div className={icon? "has-icon": ""}>
        {icon && <span className="icon">{icon}</span>}
        <input
          style={props.style}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  input {
    width: 100%;
    outline: none;
    transition: border 0.2s;
    box-shadow: none !important;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 3%;
    border-radius: 8px;
    padding: 0 16px;
    height: 40px;
    border: 1px solid #ebebeb;

    &:focus {
      border-color: var(--primary-color);
    }

    &::placeholder {
      color: #c0c0c0;
    }
  }

  .has-icon {
    position: relative;
    input {
      padding-left: 44px;
    }
    .icon {
      position: absolute;
      left: 14px;
      top: 10px;
      color: #c0c0c0;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default AISInput;
