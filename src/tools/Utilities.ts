export namespace Utilities {
  export class Strings {
    public static async CleanCamelString(str: string): Promise<string> {
      let splitString: string[] = str.split("");
      let finalString: string = "";
      let tempSplit: string[] = [];

      splitString.forEach((el: string) => {
        if (el === el.toUpperCase()) {
          finalString =
            finalString.length > 0
              ? finalString + " " + tempSplit.join("")
              : finalString + tempSplit.join("");
          tempSplit = [];
          tempSplit.push(el);
        }
        if (el === el.toLowerCase()) {
          tempSplit.push(el);
        }
      });

      if (tempSplit.length > 0) {
        finalString = finalString + " " + tempSplit.join("");
      }

      return finalString.charAt(0).toUpperCase() + finalString.slice(1);
    }
  }
}
