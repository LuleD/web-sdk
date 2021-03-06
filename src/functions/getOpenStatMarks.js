import {win} from "../Browser";

export default function(value) {
  if(!value) return;

  if(value.indexOf(';') === -1 && win.atob) {
    value = win.atob(value);
  }
  value = value.split(';');
  return {
    os_source: value[0],
    os_campaign: value[1],
    os_content: value[2],
    os_place: value[3]
  }
}
