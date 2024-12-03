import * as React from "react";

const SvgIcon = (props) => (
  <svg
    fill="none"
    className="h-6 w-6"
    data-testid="@icon/Eye"
    viewBox="0 0 24 24"
    props={props}
  >
    <path
      fill="currentColor"
      d="M23.186 11.696c-.033-.074-.827-1.835-2.593-3.601C18.241 5.743 15.27 4.5 12 4.5S5.759 5.743 3.406 8.096C1.643 9.861.844 11.625.815 11.696a.75.75 0 0 0 0 .609c.033.075.827 1.835 2.592 3.6C5.76 18.257 8.73 19.5 12 19.5s6.241-1.243 8.593-3.595c1.766-1.765 2.56-3.525 2.593-3.6a.75.75 0 0 0 0-.609M12 18c-2.886 0-5.407-1.049-7.493-3.117A12.5 12.5 0 0 1 2.344 12a12.5 12.5 0 0 1 2.163-2.883C6.592 7.05 9.114 6 12 6s5.407 1.049 7.493 3.117A12.5 12.5 0 0 1 21.661 12c-.676 1.262-3.62 6-9.661 6m0-10.5a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 12 7.5m0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    ></path>
  </svg>
);

export default SvgIcon;
