const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputCheck = require("./inputCheck");
const OutputView = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      InputCheck.checkBridgeSize(inputBridgeSize);
      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let bridgeList = [[],[]]
      this.readMoving(bridge, bridgeList);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeList) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (inputBridgeChoice) => {
        InputCheck.checkMoving(inputBridgeChoice);
        const bridgeGamge = new BridgeGame();
        const movingResult = bridgeGamge.move(inputBridgeChoice, bridge, bridgeList);
        return this.readMoving(bridge, movingResult)
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
