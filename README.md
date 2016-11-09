```
       ╭──────────────╮
       |              |
      /               |
     /   (    )       |
    /        _____ ___|__   ___   ____     ___      ______  __ __    ___  ___ ___    ___
   /        / ___/|      | /   \ |    \   /  _]    |      ||  |  |  /  _]|   |   |  /  _]
  /__      (   \_ |      ||     ||  _  | /  [_     |      ||  |  | /  [_ | _   _ | /  [_
    |       \__  ||_|  |_||  O  ||  |  ||    _]    |_|  |_||  _  ||    _]|  \_/  ||    _]
    |_      /  \ |  |  |  |     ||  |  ||   [_       |  |  |  |  ||   [_ |   |   ||   [_
     /      \    |  |  |  |     ||  |  ||     |      |  |  |  |  ||     ||   |   ||     |
    /        \___|  |__|   \___/ |__|__||_____|      |__|  |__|__||_____||___|___||_____|
   /                  | Responsive  admin theme for PyroCMS 3
  ╰───────────────────╯ 
```
> Built on the popular open source project [AdminLTE](https://almsaeedstudio.com/themes/AdminLTE/index2.html), this theme is easy to install and customize, with slick ui and intuitive user experience making PyroCMS even more pleasurable to work with.

![Stone Theme](https://github.com/websemantics/stone-theme/raw/master/docs/stone-2.png "Stone Theme")

![Login](https://github.com/websemantics/stone-theme/raw/master/docs/stone-1.png "Login")

## Install

In your project folder, require the theme package with `composer`,

```bash
composer require websemantics/stone-theme
```

Edit `.env` file and change the value of `ADMIN_THEME` to,

```
ADMIN_THEME=websemantics.theme.stone
```

## Notifications

Bonus ui to manage app notification is provided with this theme. To enable, edit `resources/config/config.php` and change the value of `notification` to true,

```
'notification'           => env('STONE_NOTIFICATION', true),
```

![Notification](https://github.com/websemantics/stone-theme/raw/master/docs/stone-4.png "Notification")

## Responsive

This theme was built to work on desktop and mobile phones. It is also fleixible to adjust to your workflow with many layout configurations.

![Responsive](https://github.com/websemantics/stone-theme/raw/master/docs/stone-3.png "Responsive")

The screenshot above shows a minimized sidebar with plenty of space to spare.

## Theme Customization

Stone theme is built with `less` and is dead easy to customize by changing themes variables in `resources/less/theme/variables.less`. 

For example, to change the dominant/primary theme color, simply change the value of `brand-primary` variable in `resources/config/variables.php` as follows, 

```
'brand-primary'          => '#43AAC5',
```

That's it!

![Theme Customization](https://github.com/websemantics/stone-theme/raw/master/docs/stone-5.png "Theme Customization")

## Support

Star this repository to show support or if you find this project useful. Need help or have a question? post at [StackOverflow](https://stackoverflow.com/questions/tagged/stone-theme websemantics).

*Please don't use the issue trackers for support/questions.*

## Contribution

Contributions to this project is accepted in the form of feedback, bugs reports and even better - pull requests :)

## Resources

- [Auto Pyro](https://github.com/websemantics/auto-pyro), PyroCMS deploy tool for faster development experience.
- [Template Template](https://github.com/pyrocms-templates/template-template), Default Pyro Builder template for building Pyro Builder templates.
- [Registry](https://github.com/pyrocms-templates), List of all Pyro Builder available template.
- [Awesome PyroCMS](https://github.com/websemantics/awesome-pyrocms), Curated list of PyroCMS addons and resources.
- [PyroCMS Cheatsheet](http://websemantics.github.io/pyrocms-cheatsheet), List of commands and features for PyroCMS 3.
- [PyroCMS](https://github.com/pyrocms/pyrocms), MVC PHP Content Management System built to be easy to use, theme and develop with. It is used by individuals and organizations of all sizes around the world.

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.