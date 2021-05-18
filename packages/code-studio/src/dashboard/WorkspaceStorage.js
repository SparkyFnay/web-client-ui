/* eslint-disable class-methods-use-this */
import { DateTimeColumnFormatter } from '../iris-grid/formatters';
import Formatter from '../iris-grid/Formatter';

const unimplementedFunction = name => {
  throw new Error(`${name} not implemented`);
};
class WorkspaceStorage {
  static makeDefaultWorkspaceData() {
    return {
      settings: {
        defaultDateTimeFormat:
          DateTimeColumnFormatter.DEFAULT_DATETIME_FORMAT_STRING,
        formatter: Formatter.getDefaultFormattingRules(),
        timeZone: DateTimeColumnFormatter.DEFAULT_TIME_ZONE_ID,
        showTimeZone: false,
        showTSeparator: true,
        disableMoveConfirmation: false,
      },
    };
  }

  static makeDefaultWorkspace() {
    return { data: WorkspaceStorage.makeDefaultWorkspaceData() };
  }

  async saveWorkspace() {
    return unimplementedFunction('saveWorkspace');
  }

  async close() {
    return unimplementedFunction('close');
  }
}

export default WorkspaceStorage;