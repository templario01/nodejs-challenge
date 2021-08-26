/**
 * @typedef {Object} Call
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 */

/**
 * @typedef {Object} ProcessedCall
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 * @property {number} callCost - Call's cost
 */

/**
 * @typedef {Object} callResponse
 * 
 * @property {number} totalCalls - Number of processed calls
 * @property {number} total - Total to pay including all the processed calls
 * @property {ProcessedCall[]} callsDetails - Processed information about calls
 */

/**
 * Design a solution to calculate what to pay for a set of phone calls. The function must receive an array of objects that will contain
 * the identifier, type and duration attributes. For the type attribute, the only valid values are: National, International and Local
 *
 * The criteria for calculating the cost of each call is as follows:
 *
 * International: first 3 minutes $ 7.56 -> $ 3.03 for each additional minute
 * National: first 3 minutes $ 1.20 -> $ 0.48 per additional minute
 * Local: $ 0.2 per minute.
 *
 * The function must return the total calls, the details of each call (the detail received + the cost of the call) and the total to pay
 * taking into account all calls
 *
 * @param {Call[]} calls - Call's information to be processed
 *
 * @returns {callResponse
 * }  - Processed information
 */

function callsCost(calls) {
  let overMin = 0;
  let minCost = 0.0;
  const callResponse = {
    total: 0
  };
  const processedCall = [];

  calls.forEach((call) => {
    switch (call.type) {
      case 'International': {
        if (call.duration > 3) {
          overMin = call.duration - 3;
          minCost = overMin * 3.03 + 3 * 7.56;
        } else {
          minCost = call.duration * 7.56;
        }

        processedCall.push({
          identifier: call.identifier,
          type: call.type,
          duration: call.duration,
          callsCost: Math.round(minCost * 100) / 100,
        });
        callResponse.total += minCost;

        break;
      }
      case 'National': {
        if (call.duration > 3) {
          overMin = call.duration - 3;
          minCost = overMin * 0.48 + 3 * 1.2;
        } else {
          minCost = call.duration * 1.2;
        }

        processedCall.push({
          identifier: call.identifier,
          type: call.type,
          duration: call.duration,
          callsCost: Math.round(minCost * 100) / 100,
        });
        callResponse.total += minCost;

        break;
      }
      case 'Local': {
        minCost = call.duration * 0.2;
        processedCall.push({
          identifier: call.identifier,
          type: call.type,
          duration: call.duration,
          callsCost: Math.round(minCost * 100) / 100,
        });
        callResponse.total += minCost;
        break;

      }
      default: {
        break;
      }
    }
  });

  callResponse
  .totalCalls = processedCall.length;
  callResponse
  .total = Math.round(callResponse.total * 100) / 100;
  callResponse
  .callsDetails = processedCall;

  return callResponse;
}

module.exports = callsCost;
