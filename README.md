# Flutter Snippets Helper

Essential Flutter widget snippets for rapid development. This extension provides commonly used Flutter widgets and patterns as snippets to speed up your development workflow.

## Features

This extension includes snippets for:

### Basic Widgets

- `stless` → Creates a StatelessWidget

  ```dart
  class WidgetName extends StatelessWidget {
    const WidgetName({super.key});

    @override
    Widget build(BuildContext context) {
      return Container();
    }
  }
  ```

- `stful` → Creates a StatefulWidget

  ```dart
  class WidgetName extends StatefulWidget {
    const WidgetName({super.key});

    @override
    State<WidgetName> createState() => _WidgetNameState();
  }

  class _WidgetNameState extends State<WidgetName> {
    @override
    Widget build(BuildContext context) {
      return Container();
    }
  }
  ```

### Layout Widgets

- `col` → Column with alignment options
- `row` → Row with alignment options
- `stack` → Stack with Positioned child
- `cont` → Container with decoration and shadow
- `responsive` → Responsive layout builder

### List & Grid Widgets

- `lvb` → ListView.builder
  ```dart
  ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) {
      return ListTile(
        title: Text('Item $index'),
      );
    },
  )
  ```
- `gvb` → GridView.builder with customizable parameters

### Navigation & Structure

- `scaffold` → Scaffold with AppBar and FloatingActionButton
- `appbar` → Custom AppBar with leading and actions
- `drawer` → Navigation Drawer with header
- `tabs` → TabBar with TabBarView
- `matapp` → MaterialApp with theme setup

### Async Widgets

- `fb` → FutureBuilder with loading and error handling
  ```dart
  FutureBuilder<dynamic>(
    future: myFuture,
    builder: (context, snapshot) {
      if (snapshot.connectionState == ConnectionState.waiting) {
        return const CircularProgressIndicator();
      }
      if (snapshot.hasError) {
        return Text('Error: ${snapshot.error}');
      }
      return Container();
    },
  )
  ```
- `sb` → StreamBuilder with loading and error handling

### State Management

- `providerclass` → Provider ChangeNotifier class

  ```dart
  class MyProvider extends ChangeNotifier {
    int _value = 0;
    int get value => _value;

    void updateValue(int newValue) {
      _value = newValue;
      notifyListeners();
    }
  }
  ```

- `getxc` → GetX Controller class
- `bloc` → BLoC class with event handler

### UI Components

- `card` → Card with padding and content
- `btn` → Styled ElevatedButton
- `form` → Form with validation
- `animcont` → AnimatedContainer with duration
- `pageview` → PageView with controller

## Usage

1. Install the extension
2. Open a `.dart` file
3. Start typing the snippet prefix (e.g., `stless`)
4. Press `Tab` to insert the snippet
5. Use `Tab` to navigate through the placeholders

## Examples

### Creating a Form

```dart
// Type 'form' and press Tab
final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        decoration: const InputDecoration(
          labelText: 'Label',
          hintText: 'Enter text',
        ),
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter some text';
          }
          return null;
        },
      ),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate()) {
            // Process data
          }
        },
        child: const Text('Submit'),
      ),
    ],
  ),
)
```

### Creating a Responsive Layout

```dart
// Type 'responsive' and press Tab
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth < 600) {
      return // Mobile layout
    } else if (constraints.maxWidth < 900) {
      return // Tablet layout
    } else {
      return // Desktop layout
    }
  },
)
```

## Requirements

- VS Code 1.93.0 or higher
- Dart/Flutter extension installed

## Known Issues

None at the moment. Please report any issues on our GitHub repository.

## Release Notes

### 0.0.2

- Added comprehensive snippets documentation
- Added icon and improved package metadata
- Fixed snippet formatting issues

### 0.0.1

- Initial release with essential Flutter snippets
- Basic widget templates
- Layout widgets
- Navigation patterns
- State management templates
- Form and validation snippets

## Contributing

Feel free to submit issues and enhancement requests on our GitHub repository.

## Working with the Extension

- Press `Ctrl+Space` (Windows, Linux, macOS) to see all available snippets
- Type the snippet prefix (e.g., `stless`) and press `Tab`
- Use `Tab` to navigate through the snippet placeholders

## For more information

- [Flutter Documentation](https://flutter.dev/docs)
- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- [Extension Repository](https://github.com/yourusername/flutter-snippets-helper)

**Enjoy coding Flutter faster!**
