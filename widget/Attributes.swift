import ActivityKit
import SwiftUI
import WidgetKit

struct TapsActivityAttributes: ActivityAttributes {
  public struct ContentState: Codable, Hashable {
    var bottomText: String
  }

  var timer: ClosedRange<Date>
  var teamNameLeft: String
  var teamNameRight: String
  var gameName: String
}
