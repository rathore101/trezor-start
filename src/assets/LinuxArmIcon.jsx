import * as React from "react";
const SvgComponent = (props) => (
  <svg
    fill="currentColor"
    width={30}
    height={30}
    data-testid="@logo/Linux64"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m19.067 10.896-.2-.42c0-1.952-.95-2.387-1.951-2.957l-.003-.004c.174-.075.405-.161.484-.57.558-.163.637-.407.717-.651.159-.082.557-.327.557-.815.239-.164.398-.409.318-.733.239-.327.32-.571.239-.816.319-.408.159-.652.08-.897.238-.488 0-.978-.637-.896-.238-.408-.875-.327-.956-.327-.08-.164-.238-.244-.637-.164-.399-.244-.717-.244-1.035-.08-.398-.327-.637-.082-.875 0-.478-.164-.558.08-.796.163-.478-.082-.637.164-.877.408 0 0-.126-.03-.238 0-.776.206-1.09 1.023-1.257 1.45-.168-.427-.481-1.244-1.257-1.452-.111-.03-.238 0-.238 0-.239-.245-.398-.49-.876-.408-.238-.08-.318-.325-.796-.162-.238-.082-.478-.327-.875 0-.32-.163-.637-.163-1.035.08-.4-.08-.559.001-.638.165-.08 0-.717-.08-.956.327-.636-.082-.877.406-.636.896-.081.245-.24.49.08.897-.08.245 0 .489.238.816-.08.327.08.57.318.733 0 .488.398.733.557.815.08.245.16.488.717.651.08.409.311.495.483.57l-.002.005c-1 .57-1.95 1.003-1.95 2.957l-.2.42c-1.253.733-2.188 3.379-.42 5.167.168.571.23.638.397 1.128.376 2.34 2.122 3.185 2.54 3.267.585.488.98.754 1.899 1.08.836.816 1.731 1.06 2.65 1.06.919 0 1.814-.244 2.65-1.06.919-.326 1.314-.592 1.9-1.081.416-.082 2.163-.928 2.539-3.267.168-.49.23-.556.397-1.128 1.767-1.787.834-4.432-.42-5.167zm-1.154-.134c-.08.795-3.99-2.622-3.34-2.702 1.873-.318 3.421.716 3.34 2.702zm-3.938-1.827c0 .573-.805 1.004-1.975 1.008-1.172-.006-1.975-.435-1.975-1.008 0-.48.606-.959 1.28-1.175h.034A2.2 2.2 0 0 1 12 7.639c.215.002.442.047.662.121h.034c.674.219 1.28.696 1.28 1.175zm-.582-5.825c0 .145.071.218.071.29.213-.217.355-.434.568-.652 0 .145-.071.218.07.362.143-.217.283-.362.568-.508-.143.218 0 .29.07.363.212-.145.354-.29.71-.436-.071.145-.214.217-.071.362.213-.145.354-.217.85-.362-.07.145-.283.217-.213.362.213-.072.496-.145.78-.217-.143.145-.284.217-.143.29.285-.072.567-.217.922-.072l-.212.217h.849c-.141.218-.283.362-.353.653h.353c-.141.436-.424.508-.496.652.07.073.213.073.425 0-.142.292-.354.437-.567.654.07.072.142.072.354 0-.213.216-.425.362-.638.58.07.074.213.074.354.074-.213.216-.567.362-.85.508.07.144.213.071.283.071-.212.145-.567.29-.85.363.071.072.143.144.283.144-.354.218-.85.073-.992.218 0 .073.142.144.213.217-.567 0-2.042.086-2.324-1.075.265-.362 1.043-1.14 1.77-1.59-.894.25-1.704.796-2.136 1.094-1.132-.579-.285-1.982.352-2.562zM6.921 6.304c.07 0 .213.071.282-.073-.282-.147-.637-.29-.85-.51.143 0 .283 0 .355-.071-.212-.219-.425-.363-.638-.58.213.073.283.073.354 0-.212-.218-.424-.363-.566-.653.213.073.354.073.425 0-.071-.146-.354-.218-.496-.653h.354c-.07-.29-.212-.436-.354-.652h.849l-.212-.22c.354-.144.638 0 .922.074.142-.073 0-.146-.143-.292.285.074.568.147.78.219.07-.145-.141-.218-.212-.362.497.144.637.217.851.362.143-.145 0-.218-.07-.362.354.144.495.29.709.435.07-.072.213-.145.07-.362.284.144.425.289.568.506.142-.144.07-.217.07-.362.214.218.355.435.567.653 0-.073.07-.145.07-.29.639.58 1.485 1.982.35 2.563-.43-.298-1.242-.846-2.136-1.093.73.447 1.507 1.225 1.772 1.59-.285 1.16-1.758 1.076-2.325 1.076.07-.072.213-.145.213-.218-.143-.145-.638 0-.992-.216.142 0 .212-.073.283-.146a3.101 3.101 0 0 1-.85-.363zM9.427 8.06c.652.08-3.257 3.497-3.339 2.702-.083-1.986 1.466-3.02 3.34-2.702zm-4.202 7.124c-.887-.72-1.183-2.74.444-3.606 1.033-.216.369 3.966-.444 3.606zm3.709 3.996c-.422.34-1.617.34-2.53-.884-.633-.817-.422-2.111-.07-2.588.492-.408 1.335.137 2.039.954.7.747 1.053 2.11.56 2.518zm-.917-4.709c-.905-.588-1.055-1.913-.377-3.018.679-1.104 2.037-1.473 2.942-.883.906.589 1.133 1.988.378 3.018-.68 1.03-2.036 1.399-2.943.883zM12 21.54c-1.08-.011-1.954-1.074-1.954-1.375 0-.454.96-.582 1.895-.582.018 0 .04.003.059.004.02 0 .039-.004.058-.004.935 0 1.896.128 1.896.582 0 .3-.874 1.364-1.954 1.375zm.06-2.806c-.02 0-.04-.005-.059-.005-.02 0-.04.005-.06.005-1.217 0-2.206-.89-2.206-2.004 0-1.108.982-1.994 2.267-2.003 1.284.008 2.266.895 2.266 2.003-.001 1.113-.99 2.004-2.207 2.004zm.981-5.146c-.754-1.03-.528-2.43.378-3.019.905-.59 2.262-.22 2.942.883.68 1.104.528 2.43-.377 3.02-.907.515-2.264.146-2.943-.884zm4.557 4.707c-.914 1.224-2.11 1.224-2.53.884-.492-.407-.142-1.77.562-2.518.704-.817 1.547-1.363 2.039-.953.35.477.562 1.77-.07 2.587zm1.177-3.11c-.813.36-1.478-3.823-.444-3.607 1.628.866 1.332 2.885.444 3.606z" />
  </svg>
);
export default SvgComponent;