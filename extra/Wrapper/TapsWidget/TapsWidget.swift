import WidgetKit
import SwiftUI


struct Provider: TimelineProvider {
	func placeholder(in context: Context) -> SimpleEntry {
		SimpleEntry(date: Date(), taps: 888)
	}

	func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
		let entry = SimpleEntry(date: Date(), taps: 800)
		completion(entry)
	}

	func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
		var entries: [SimpleEntry] = []

		// Generate a timeline consisting of five entries an hour apart, starting from the current date.
		let currentDate = Date()
		for hourOffset in 0 ..< 5 {
			let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
			let taps = UserDefaults(suiteName: "group.is.pvin.tap-together")?.integer(forKey: "taps") ?? 0
			let entry = SimpleEntry(date: entryDate, taps: taps)
			entries.append(entry)
		}

		let timeline = Timeline(entries: entries, policy: .atEnd)
		completion(timeline)
	}
}

struct SimpleEntry: TimelineEntry {
	let date: Date
	let taps: Int
}

struct TapsWidgetEntryView : View {
	@Environment(\.widgetFamily) private var family

	var entry: Provider.Entry

	var body: some View {
		if (family == .accessoryInline) {
			Text("Taps: \(entry.taps)")
		} else {
			VStack {
				Text("Time:")
				Text(String(entry.taps))
			}
		}
	}
}

struct TapsWidget: Widget {
	let kind: String = "TapsWidget"



	var body: some WidgetConfiguration {
		StaticConfiguration(kind: kind, provider: Provider()) { entry in
			TapsWidgetEntryView(entry: entry)
				.padding()
				.containerBackground(.white, for: .widget)
		}
		.configurationDisplayName("My Widgeta")
		.description("This is an example widget.")
	}
}

#Preview(as: .systemSmall) {
	TapsWidget()
} timeline: {
	SimpleEntry(date: .now, taps: 999999999999999999)
}
