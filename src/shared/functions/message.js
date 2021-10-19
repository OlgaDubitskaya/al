import { message } from 'antd'

export const success = (text = "This is a success message") => {
  message.success(text);
}

export const error = (text = "This is an error message") => {
  message.error(text);
}

export const warning = (text = 'This is a warning message') => {
  message.warning(text);
}
