import React, { useContext } from 'react';
import { ThemeContext } from '../App';
function Info() {
        const theme = useContext(ThemeContext);
        return (
            <div>
                <p className={theme}>
                    Đây là kết quả của việc sử dụng useContext để set theme
                </p>
            </div>
        );
    }

export default Info;