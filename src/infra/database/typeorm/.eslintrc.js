module.exports = {
  rules: {
    'new-cap': [
      'error',
      {
        capIsNewExceptions: [
          'Entity',
          'PrimaryGeneratedColumn',
          'Column',
          'CreateDateColumn',
          'UpdateDateColumn',
          'Exclude',
          'ManyToOne',
          'OneToMany',
          'ManyToMany',
          'JoinTable',
        ],
      },
    ],
  },
};
